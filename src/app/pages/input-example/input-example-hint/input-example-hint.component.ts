import { Component, inject, OnInit } from '@angular/core';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { FormFieldLabelComponent } from 'src/app/shared/components/form-field-label/form-field-label.component';
import { FormFieldHintComponent } from 'src/app/shared/components/form-field-hint/form-field-hint.component';
import { InputDirective } from 'src/app/shared/components/form-field/directives/input.directive';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-input-example-hint',
  imports: [
    ExampleComponent,
    TabGroupComponent,
    TabComponent,
    FormFieldComponent,
    InputDirective,
    FormFieldLabelComponent,
    FormFieldHintComponent,
    HighlightAuto,
  ],
  templateUrl: './input-example-hint.component.html',
  styleUrl: './input-example-hint.component.scss',
})
export class InputExampleHintComponent implements OnInit {
  private http = inject(HttpClient);

  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
  };

  ngOnInit(): void {
    const fileMappings = {
      '/input/hint/example-html.txt': 'exampleHtml',
      '/input/hint/example-ts.txt': 'exampleTs',
      '/input/hint/example-scss.txt': 'exampleScss',
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
