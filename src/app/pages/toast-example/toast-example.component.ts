import { Component } from '@angular/core';
import { ToastExampleBasicComponent } from 'src/app/pages/toast-example/toast-example-basic/toast-example-basic.component';
import { ToastExampleCodeComponent } from 'src/app/pages/toast-example/toast-example-code/toast-example-code.component';

@Component({
  selector: 'app-toast-example',
  imports: [ToastExampleBasicComponent, ToastExampleCodeComponent],
  templateUrl: './toast-example.component.html',
  styleUrl: './toast-example.component.scss',
})
export class ToastExampleComponent {}
