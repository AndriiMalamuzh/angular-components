import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DialogExampleBasicComponent } from 'src/app/pages/dialog-example/dialog-example-basic/dialog-example-basic.component';
import { DialogExampleCodeComponent } from 'src/app/pages/dialog-example/dialog-example-code/dialog-example-code.component';

@Component({
  selector: 'app-dialog-example',
  imports: [DialogExampleBasicComponent, DialogExampleCodeComponent],
  templateUrl: './dialog-example.component.html',
  styleUrl: './dialog-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExampleComponent {}
