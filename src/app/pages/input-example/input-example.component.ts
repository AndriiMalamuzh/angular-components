import { Component } from '@angular/core';
import { InputExampleClearComponent } from 'src/app/pages/input-example/input-example-clear/input-example-clear.component';
import { InputExampleErrorComponent } from 'src/app/pages/input-example/input-example-error/input-example-error.component';
import { InputExampleHintComponent } from 'src/app/pages/input-example/input-example-hint/input-example-hint.component';
import { InputExampleTextareaComponent } from 'src/app/pages/input-example/input-example-textarea/input-example-textarea.component';
import { InputExampleDirectiveComponent } from 'src/app/pages/input-example/input-example-directive/input-example-directive.component';

@Component({
  selector: 'app-input-example',
  imports: [
    InputExampleClearComponent,
    InputExampleErrorComponent,
    InputExampleHintComponent,
    InputExampleTextareaComponent,
    InputExampleDirectiveComponent,
  ],
  templateUrl: './input-example.component.html',
  styleUrl: './input-example.component.scss',
})
export class InputExampleComponent {}
