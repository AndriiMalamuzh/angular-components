import { Directive, inject, input } from '@angular/core';
import { DialogRef } from '../dialog-ref';

@Directive({
  selector: '[dialogClose]',
  host: {
    '(click)': 'onClick()',
  },
})
export class DialogCloseDirective {
  private readonly dialogRef = inject(DialogRef);

  readonly dialogClose = input<unknown>();

  onClick(): void {
    this.dialogRef.close(this.dialogClose());
  }
}
