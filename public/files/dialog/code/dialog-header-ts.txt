import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { DialogRef } from '../../dialog-ref';

@Component({
  selector: 'app-dialog-header',
  imports: [IconComponent],
  templateUrl: './dialog-header.component.html',
  styleUrl: './dialog-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogHeaderComponent {
  private readonly dialogRef = inject(DialogRef);

  onClose(): void {
    this.dialogRef.close();
  }
}
