import { Component, inject, OnInit } from '@angular/core';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { FormFieldLabelComponent } from 'src/app/shared/components/form-field-label/form-field-label.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputDirective } from 'src/app/shared/components/form-field/directives/input.directive';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { FormFieldErrorComponent } from 'src/app/shared/components/form-field-error/form-field-error.component';
import { HighlightAuto } from 'ngx-highlightjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-input-example-error',
  imports: [
    ExampleComponent,
    FormFieldComponent,
    FormFieldLabelComponent,
    FormFieldErrorComponent,
    InputDirective,
    TabComponent,
    TabGroupComponent,
    ReactiveFormsModule,
    HighlightAuto,
  ],
  templateUrl: './input-example-error.component.html',
  styleUrl: './input-example-error.component.scss',
})
export class InputExampleErrorComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
  };

  private http = inject(HttpClient);

  ngOnInit(): void {
    const fileMappings = {
      '/input/error/example-html.txt': 'exampleHtml',
      '/input/error/example-ts.txt': 'exampleTs',
      '/input/error/example-scss.txt': 'exampleScss',
    };

    for (const [url, key] of Object.entries(fileMappings)) {
      this.loadFile(url, key);
    }
  }

  loadFile(url: string, key: string): void {
    this.http
      .get(`${environment.publicUrl}files${url}`, { responseType: 'text' })
      .subscribe({
        next: res => (this.fileContents[key] = res),
        error: error => console.error(`Error loading file ${url}`, error),
      });
  }
}
