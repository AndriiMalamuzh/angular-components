import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EmbeddedViewRef,
  EnvironmentInjector,
  inject,
  Injectable,
  signal,
} from '@angular/core';
import { ToastComponent } from 'src/app/shared/components/toast/toast.component';
import { ToastContainerComponent } from 'src/app/shared/components/toast/toast-container.component';
import {
  ToastConfig,
  ToastPosition,
} from 'src/app/shared/components/toast/toast.model';

interface ActiveToast {
  componentRef: ComponentRef<ToastComponent>;
  autoDestroyTimeout: ReturnType<typeof setTimeout> | null;
  position: ToastPosition;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private readonly environmentInjector = inject(EnvironmentInjector);
  private readonly appRef = inject(ApplicationRef);

  private readonly activeToasts = signal<ActiveToast[]>([]);
  private readonly containerRefs = new Map<
    ToastPosition,
    ComponentRef<ToastContainerComponent>
  >();

  open(config: ToastConfig): void {
    const duration = config.duration ?? 3000;
    const sticky = config.sticky ?? false;
    const position = config.position ?? 'topRight';

    this.ensureContainer(position);

    const componentRef = createComponent(ToastComponent, {
      environmentInjector: this.environmentInjector,
    });

    componentRef.instance.config.set({
      ...config,
      type: config.type ?? 'success',
      duration,
      sticky,
      position,
    });

    this.appRef.attachView(componentRef.hostView);

    const domElem = this.getRootElement(componentRef);
    const containerRef = this.containerRefs.get(position)!;
    const containerElem = this.getRootElement(containerRef);
    containerElem.appendChild(domElem);

    let autoDestroyTimeout: ReturnType<typeof setTimeout> | null = null;
    if (!sticky) {
      autoDestroyTimeout = setTimeout(() => {
        this.destroyToast(componentRef);
      }, duration + 200);
    }

    this.activeToasts.update(toasts => [
      ...toasts,
      { componentRef, autoDestroyTimeout, position },
    ]);
  }

  close(instance: ToastComponent): void {
    const toast = this.activeToasts().find(
      t => t.componentRef.instance === instance
    );
    if (toast) {
      this.destroyToast(toast.componentRef);
    }
  }

  success(message: string, summary?: string): void {
    this.open({ message, summary, type: 'success' });
  }

  error(message: string, summary?: string): void {
    this.open({ message, summary, type: 'error' });
  }

  warning(message: string, summary?: string): void {
    this.open({ message, summary, type: 'warning' });
  }

  info(message: string, summary?: string): void {
    this.open({ message, summary, type: 'info' });
  }

  clearAll(): void {
    for (const toast of this.activeToasts()) {
      if (toast.autoDestroyTimeout) {
        clearTimeout(toast.autoDestroyTimeout);
      }
      this.appRef.detachView(toast.componentRef.hostView);
      toast.componentRef.destroy();
    }
    this.activeToasts.set([]);
    this.destroyAllContainers();
  }

  private getRootElement<T>(ref: ComponentRef<T>): HTMLElement {
    return (ref.hostView as EmbeddedViewRef<unknown>)
      .rootNodes[0] as HTMLElement;
  }

  private ensureContainer(position: ToastPosition): void {
    if (this.containerRefs.has(position)) return;

    const containerRef = createComponent(ToastContainerComponent, {
      environmentInjector: this.environmentInjector,
    });
    containerRef.instance.position.set(position);
    this.appRef.attachView(containerRef.hostView);
    document.body.appendChild(this.getRootElement(containerRef));
    this.containerRefs.set(position, containerRef);
  }

  private destroyContainer(position: ToastPosition): void {
    const containerRef = this.containerRefs.get(position);
    if (containerRef) {
      this.appRef.detachView(containerRef.hostView);
      containerRef.destroy();
      this.containerRefs.delete(position);
    }
  }

  private destroyAllContainers(): void {
    for (const position of this.containerRefs.keys()) {
      this.destroyContainer(position);
    }
  }

  private destroyToast(
    componentRef: ComponentRef<ToastComponent> | null
  ): void {
    if (!componentRef) return;

    const toast = this.activeToasts().find(
      t => t.componentRef === componentRef
    );
    if (toast?.autoDestroyTimeout) {
      clearTimeout(toast.autoDestroyTimeout);
    }

    const position = toast?.position ?? 'topRight';

    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();

    this.activeToasts.update(toasts =>
      toasts.filter(t => t.componentRef !== componentRef)
    );

    const hasToastsInPosition = this.activeToasts().some(
      t => t.position === position
    );
    if (!hasToastsInPosition) {
      this.destroyContainer(position);
    }
  }
}
