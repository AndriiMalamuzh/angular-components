import { Component } from '@angular/core';
import { SpinnerExampleBasicComponent } from 'src/app/pages/spinner-example/spinner-example-basic/spinner-example-basic.component';
import { SpinnerExampleCodeComponent } from 'src/app/pages/spinner-example/spinner-example-code/spinner-example-code.component';

@Component({
  selector: 'app-spinner-example',
  imports: [SpinnerExampleBasicComponent, SpinnerExampleCodeComponent],
  templateUrl: './spinner-example.component.html',
  styleUrl: './spinner-example.component.scss',
})
export class SpinnerExampleComponent {}
