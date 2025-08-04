import { Component, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { DialogRef } from 'src/app/shared/components/dialog/dialog-ref';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import { AnotherComponent } from 'src/app/pages/dialog-example/another.component';

@Component({
  selector: 'app-some-component',
  template: `
    <h2>Діалогове вікно</h2>
    <p>Отримані дані: {{ data | json }}</p>
    <button (click)="close()">Закрити діалог</button>
    <button (click)="openNested()">Відкрити вкладений діалог</button>
  `,
  imports: [JsonPipe],
})
export class SomeComponent {
  @Input() data: any;
  dialogRef!: DialogRef;

  constructor(private dialogService: DialogService) {}

  close() {
    this.dialogRef.close({ confirmed: true });
  }

  openNested() {
    this.dialogService.open(AnotherComponent, {
      data: { message: 'Вкладений діалог' },
    });
  }
}
