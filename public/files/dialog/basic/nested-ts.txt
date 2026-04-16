import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  DIALOG_DATA,
  DialogRef,
  DialogService,
} from 'src/app/shared/components/dialog';
import { DialogHeaderComponent } from 'src/app/shared/components/dialog/components/dialog-header/dialog-header.component';
import { DialogContentComponent } from 'src/app/shared/components/dialog/components/dialog-content/dialog-content.component';
import { DialogFooterComponent } from 'src/app/shared/components/dialog/components/dialog-footer/dialog-footer.component';
import { DialogCloseDirective } from 'src/app/shared/components/dialog/directives/dialog-close.directive';
import { ButtonDirective } from 'src/app/shared/directives/button.directive';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

export interface NestedDialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-nested-dialog',
  imports: [
    DialogHeaderComponent,
    DialogContentComponent,
    DialogFooterComponent,
    DialogCloseDirective,
    ButtonDirective,
  ],
  templateUrl: './nested-dialog.component.html',
  styleUrl: './nested-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NestedDialogComponent {
  readonly data = inject<NestedDialogData>(DIALOG_DATA);
  private readonly dialogRef = inject(DialogRef);
  private readonly dialog = inject(DialogService);

  openInnerDialog(): void {
    const ref = this.dialog.open<ConfirmDialogComponent, boolean>(
      ConfirmDialogComponent,
      {
        data: {
          title: 'Inner dialog',
          message: 'This dialog was opened from inside another dialog.',
        },
        width: '400px',
      }
    );

    ref.afterClosed().subscribe(result => {
      if (result) {
        this.dialogRef.close('inner-confirmed');
      }
    });
  }

  onClose(): void {
    this.dialogRef.close('closed');
  }
}
