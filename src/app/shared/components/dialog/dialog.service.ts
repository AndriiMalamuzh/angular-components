import {
  Injectable,
  Injector,
  ApplicationRef,
  ComponentFactoryResolver,
  Type,
  EmbeddedViewRef,
  inject,
} from '@angular/core';
import { DialogComponent } from './dialog.component';
import { DialogRef } from './dialog-ref';

@Injectable({ providedIn: 'root' })
export class DialogService {
  private injector = inject(Injector);
  private appRef = inject(ApplicationRef);
  private cfr = inject(ComponentFactoryResolver);

  private openDialogsCount = 0;

  private getScrollbarWidth(): number {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    outer.parentNode?.removeChild(outer);

    return scrollbarWidth;
  }

  private disableScroll(): void {
    if (this.openDialogsCount === 0) {
      const scrollbarWidth = this.getScrollbarWidth();
      const currentPadding = parseInt(
        document.body.style.paddingRight || '0',
        10
      );

      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${currentPadding + scrollbarWidth}px`;
    }

    this.openDialogsCount++;
  }

  private enableScroll(): void {
    this.openDialogsCount--;

    if (this.openDialogsCount === 0) {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }

  open<T extends { dialogRef?: DialogRef<any> }>(
    component: Type<T>,
    config?: { data?: any; className?: string }
  ): DialogRef<any> {
    this.disableScroll();
    const containerFactory = this.cfr.resolveComponentFactory(DialogComponent);
    const containerRef = containerFactory.create(this.injector);

    containerRef.instance.className = config?.className;

    this.appRef.attachView(containerRef.hostView);
    const domElem = (containerRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    containerRef.instance.viewContainerRef.clear();
    const contentFactory = this.cfr.resolveComponentFactory(component);
    const contentRef =
      containerRef.instance.viewContainerRef.createComponent(contentFactory);

    if (config?.data) {
      (contentRef.instance as any).data = config.data;
    }

    const dialogRef = new DialogRef<any>(containerRef);
    dialogRef.afterClosed.subscribe(() => {
      this.enableScroll();
    });
    if ('dialogRef' in contentRef.instance) {
      (contentRef.instance as any).dialogRef = dialogRef;
    }
    containerRef.instance.dialogRef = dialogRef;

    return dialogRef;
  }
}
