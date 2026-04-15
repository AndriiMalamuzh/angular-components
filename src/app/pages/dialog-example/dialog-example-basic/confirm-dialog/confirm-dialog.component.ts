import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from 'src/app/shared/components/dialog';
import { DialogHeaderComponent } from 'src/app/shared/components/dialog/components/dialog-header/dialog-header.component';
import { DialogContentComponent } from 'src/app/shared/components/dialog/components/dialog-content/dialog-content.component';
import { DialogFooterComponent } from 'src/app/shared/components/dialog/components/dialog-footer/dialog-footer.component';
import { DialogCloseDirective } from 'src/app/shared/components/dialog/directives/dialog-close.directive';
import { ButtonDirective } from 'src/app/shared/directives/button.directive';

export interface ConfirmDialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-confirm-dialog',
  imports: [
    DialogHeaderComponent,
    DialogContentComponent,
    DialogFooterComponent,
    DialogCloseDirective,
    ButtonDirective,
  ],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  readonly data = inject<ConfirmDialogData>(DIALOG_DATA);
  private readonly dialogRef = inject(DialogRef);

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
