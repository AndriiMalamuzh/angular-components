export interface DialogConfig<T = unknown> {
  data?: T;
  width?: string;
  disableClose?: boolean;
  panelClass?: string | string[];
}
