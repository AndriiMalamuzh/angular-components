export type ToastType = 'success' | 'error' | 'warning' | 'info';

export type ToastPosition =
  | 'topRight'
  | 'topLeft'
  | 'bottomRight'
  | 'bottomLeft';

export interface ToastConfig {
  message: string;
  summary?: string;
  type?: ToastType;
  duration?: number;
  sticky?: boolean;
  position?: ToastPosition;
}
