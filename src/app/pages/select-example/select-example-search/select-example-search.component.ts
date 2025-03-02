import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  OnInit,
  signal,
} from '@angular/core';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { FormFieldComponent } from 'src/app/shared/components/form-field/form-field.component';
import { FormFieldLabelComponent } from 'src/app/shared/components/form-field/form-field-label/form-field-label.component';
import { OptionComponent } from 'src/app/shared/components/select/option/option.component';
import { SelectComponent } from 'src/app/shared/components/select/select.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { FormsModule } from '@angular/forms';
import { HighlightAuto } from 'ngx-highlightjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SelectSearchDirective } from 'src/app/shared/components/select/select-search.directive';

@Component({
  selector: 'app-select-example-search',
  imports: [
    ExampleComponent,
    FormFieldComponent,
    FormFieldLabelComponent,
    OptionComponent,
    SelectComponent,
    TabComponent,
    TabGroupComponent,
    FormsModule,
    HighlightAuto,
    SelectSearchDirective,
  ],
  templateUrl: './select-example-search.component.html',
  styleUrl: './select-example-search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectExampleSearchComponent implements OnInit {
  private http = inject(HttpClient);

  languages: string[] = [
    'Ukrainian',
    'English',
    'German',
    'Spanish',
    'French',
    'Italian',
  ];
  filteredLanguages = signal<string[]>(this.languages);
  value = model<string>();
  search = model<string>();

  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
  };

  onSearch(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredLanguages.set(
      this.languages.filter(language =>
        language.toLowerCase().includes(searchTerm)
      )
    );
  }

  onSelectChanged(): void {
    this.search.set('');
    this.filteredLanguages.set(this.languages);
  }

  ngOnInit(): void {
    const fileMappings = {
      '/select/search/example-html.txt': 'exampleHtml',
      '/select/search/example-ts.txt': 'exampleTs',
      '/select/search/example-scss.txt': 'exampleScss',
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
