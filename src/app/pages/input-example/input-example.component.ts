import { Component } from '@angular/core';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { FormFieldLabelComponent } from 'src/app/shared/components/form-field-label/form-field-label.component';
import { InputDirective } from 'src/app/shared/components/form-field/directives/input.directive';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-example',
  imports: [
    FormFieldComponent,
    FormFieldLabelComponent,
    InputDirective,
    FormsModule,
  ],
  templateUrl: './input-example.component.html',
  styleUrl: './input-example.component.scss',
})
export class InputExampleComponent {
  value = 'asdf';
}
