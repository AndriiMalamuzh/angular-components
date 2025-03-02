import { Component } from '@angular/core';
import { SelectExampleBasicComponent } from 'src/app/pages/select-example/select-example-basic/select-example-basic.component';
import { SelectExampleMultiplyComponent } from 'src/app/pages/select-example/select-example-multiply/select-example-multiply.component';
import { SelectExampleDisabledComponent } from 'src/app/pages/select-example/select-example-disabled/select-example-disabled.component';
import { SelectExampleErrorComponent } from 'src/app/pages/select-example/select-example-error/select-example-error.component';
import { SelectExampleSearchComponent } from 'src/app/pages/select-example/select-example-search/select-example-search.component';
import { SelectExampleCodeComponent } from 'src/app/pages/select-example/select-example-code/select-example-code.component';

@Component({
  selector: 'app-select-example',
  imports: [
    SelectExampleBasicComponent,
    SelectExampleMultiplyComponent,
    SelectExampleDisabledComponent,
    SelectExampleErrorComponent,
    SelectExampleSearchComponent,
    SelectExampleCodeComponent,
  ],
  templateUrl: './select-example.component.html',
  styleUrl: './select-example.component.scss',
})
export class SelectExampleComponent {}
