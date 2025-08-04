import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogRef } from 'src/app/shared/components/dialog/dialog-ref';
import {
  dialogAnimation,
  dialogBackdropAnimation,
} from 'src/app/shared/components/dialog/dialog.animation';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  animations: [dialogAnimation, dialogBackdropAnimation],
})
export class DialogComponent {
  @ViewChild('dialogContent', { read: ViewContainerRef, static: true })
  viewContainerRef!: ViewContainerRef;

  className?: string;
  dialogRef!: DialogRef<any>;

  isOpen = true;

  onBackdropClick(): void {
    this.dialogRef.close();
  }

  startClosing(): void {
    this.isOpen = false;
  }
}
