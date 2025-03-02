import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { FormFieldLabelComponent } from 'src/app/shared/components/form-field/form-field-label/form-field-label.component';
import { OptionComponent } from 'src/app/shared/components/select/option/option.component';
import { SelectComponent } from 'src/app/shared/components/select/select.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HighlightAuto } from 'ngx-highlightjs';
import { FormFieldErrorComponent } from 'src/app/shared/components/form-field/form-field-error/form-field-error.component';

@Component({
  selector: 'app-select-example-error',
  imports: [
    ExampleComponent,
    FormFieldComponent,
    FormFieldLabelComponent,
    OptionComponent,
    SelectComponent,
    TabComponent,
    TabGroupComponent,
    HighlightAuto,
    ReactiveFormsModule,
    FormFieldErrorComponent,
  ],
  templateUrl: './select-example-error.component.html',
  styleUrl: './select-example-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectExampleErrorComponent implements OnInit {
  private http = inject(HttpClient);

  languages: string[] = [
    'Ukrainian',
    'English',
    'German',
    'Spanish',
    'French',
    'Italian',
  ];
  language = new FormControl(null, [Validators.required]);

  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
  };

  ngOnInit(): void {
    const fileMappings = {
      '/select/error/example-html.txt': 'exampleHtml',
      '/select/error/example-ts.txt': 'exampleTs',
      '/select/error/example-scss.txt': 'exampleScss',
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
