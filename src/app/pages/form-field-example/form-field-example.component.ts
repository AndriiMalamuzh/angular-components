import { Component } from '@angular/core';
import { FormFieldExampleCodeComponent } from 'src/app/pages/form-field-example/form-field-example-code/form-field-example-code.component';
import { FormFieldExampleDirectivesComponent } from 'src/app/pages/form-field-example/form-field-example-directives/form-field-example-directives.component';
import { FormFieldLabelExampleComponent } from 'src/app/pages/form-field-example/form-field-label-example/form-field-label-example.component';
import { FormFieldHintExampleComponent } from 'src/app/pages/form-field-example/form-field-hint-example/form-field-hint-example.component';
import { FormFieldErrorExampleComponent } from 'src/app/pages/form-field-example/form-field-error-example/form-field-error-example.component';

@Component({
  selector: 'app-form-field-example',
  imports: [
    FormFieldExampleCodeComponent,
    FormFieldExampleDirectivesComponent,
    FormFieldLabelExampleComponent,
    FormFieldHintExampleComponent,
    FormFieldErrorExampleComponent,
  ],
  templateUrl: './form-field-example.component.html',
  styleUrl: './form-field-example.component.scss',
})
export class FormFieldExampleComponent {}
