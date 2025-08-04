import { Component } from '@angular/core';
import { DialogService } from 'src/app/shared/components/dialog/dialog.service';
import { SomeComponent } from 'src/app/pages/dialog-example/some.component';

@Component({
  selector: 'app-dialog-example',
  imports: [],
  templateUrl: './dialog-example.component.html',
  styleUrl: './dialog-example.component.scss',
})
export class DialogExampleComponent {
  constructor(private dialog: DialogService) {}

  openDialog() {
    this.dialog
      .open(SomeComponent, {
        data: { example: 'Деякі дані' },
        className: 'custom-dialog-class',
      })
      .afterClosed.subscribe(result => {
        console.log('Діалог закрито з результатом: ', result);
      });
  }
}
