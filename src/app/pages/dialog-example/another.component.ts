// another.component.ts
import { Component, Input } from '@angular/core';
import { DialogRef } from 'src/app/shared/components/dialog/dialog-ref';

@Component({
  selector: 'app-another-component',
  template: `
    <h3>Вкладений діалог</h3>
    <p>{{ data?.message }}</p>
    <button (click)="close()">Закрити вкладений діалог</button>
  `,
})
export class AnotherComponent {
  @Input() data: any;
  dialogRef!: DialogRef<any>;

  close() {
    this.dialogRef.close();
  }
}
