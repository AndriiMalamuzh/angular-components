import { Component, inject, model, OnInit } from '@angular/core';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { InputDirective } from 'src/app/shared/components/form-field/directives/input.directive';
import { FormsModule } from '@angular/forms';
import { FormFieldLabelComponent } from 'src/app/shared/components/form-field-label/form-field-label.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { ButtonDirective } from 'src/app/shared/directives/button.directive';
import { FormFieldSuffixDirective } from 'src/app/shared/components/form-field/directives/form-field-suffix.directive';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-input-example-clear',
  imports: [
    ExampleComponent,
    TabComponent,
    TabGroupComponent,
    FormFieldComponent,
    FormFieldLabelComponent,
    InputDirective,
    FormsModule,
    IconComponent,
    ButtonDirective,
    FormFieldSuffixDirective,
    HighlightAuto,
  ],
  templateUrl: './input-example-clear.component.html',
  styleUrl: './input-example-clear.component.scss',
})
export class InputExampleClearComponent implements OnInit {
  value = model('Clear me!');

  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
  };

  private http = inject(HttpClient);

  ngOnInit(): void {
    const fileMappings = {
      '/input/clear/example-html.txt': 'exampleHtml',
      '/input/clear/example-ts.txt': 'exampleTs',
      '/input/clear/example-scss.txt': 'exampleScss',
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
