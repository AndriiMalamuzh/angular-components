import { Component, inject, OnInit } from '@angular/core';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { FormFieldLabelComponent } from 'src/app/shared/components/form-field-label/form-field-label.component';
import { InputDirective } from 'src/app/shared/components/form-field/directives/input.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-input-example-textarea',
  imports: [
    ExampleComponent,
    FormFieldComponent,
    FormFieldLabelComponent,
    InputDirective,
    ReactiveFormsModule,
    TabComponent,
    TabGroupComponent,
    HighlightAuto,
  ],
  templateUrl: './input-example-textarea.component.html',
  styleUrl: './input-example-textarea.component.scss',
})
export class InputExampleTextareaComponent implements OnInit {
  private http = inject(HttpClient);

  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
  };

  ngOnInit(): void {
    const fileMappings = {
      '/input/textarea/example-html.txt': 'exampleHtml',
      '/input/textarea/example-ts.txt': 'exampleTs',
      '/input/textarea/example-scss.txt': 'exampleScss',
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
