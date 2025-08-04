import { animate, style, transition, trigger } from '@angular/animations';

export const dialogAnimation = trigger('dialog', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'scale(0.7)',
    }),
    animate(
      '80ms ease-out',
      style({
        opacity: 1,
        transform: 'scale(1)',
      })
    ),
  ]),
]);

export const dialogBackdropAnimation = trigger('backdrop', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('80ms ease-out', style({ opacity: 1 })),
  ]),
]);
