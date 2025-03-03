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

interface ToastConfig {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private environmentInjector = inject(EnvironmentInjector);
  private appRef = inject(ApplicationRef);

  private currentToast = signal<ComponentRef<ToastComponent> | null>(null);

  open({ message, type = 'success', duration = 3000 }: ToastConfig): void {
    if (this.currentToast() !== null) {
      this.destroyToast(this.currentToast());
    }

    const componentRef = createComponent(ToastComponent, {
      environmentInjector: this.environmentInjector,
    });
    this.currentToast.set(componentRef);

    componentRef.instance.message.set(message);
    componentRef.instance.type.set(type);
    componentRef.instance.duration.set(duration);

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    setTimeout(() => {
      this.destroyToast(componentRef);
    }, duration + 150);
  }

  close(): void {
    this.destroyToast(this.currentToast());
  }

  private destroyToast(
    componentRef: ComponentRef<ToastComponent> | null
  ): void {
    if (componentRef) {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
      if (this.currentToast() === componentRef) {
        this.currentToast.set(null);
      }
    }
  }
}
