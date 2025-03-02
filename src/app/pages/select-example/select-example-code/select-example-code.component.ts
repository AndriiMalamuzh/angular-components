import { Component, inject, OnInit } from '@angular/core';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { HighlightAuto } from 'ngx-highlightjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-select-example-code',
  imports: [ExampleComponent, TabComponent, TabGroupComponent, HighlightAuto],
  templateUrl: './select-example-code.component.html',
  styleUrl: './select-example-code.component.scss',
})
export class SelectExampleCodeComponent implements OnInit {
  private http = inject(HttpClient);

  fileContents: Record<string, string> = {
    selectHtml: '',
    selectTs: '',
    selectScss: '',
    selectSearchScss: '',
    optionHtml: '',
    optionTs: '',
    optionScss: '',
  };

  ngOnInit(): void {
    const fileMappings = {
      '/select/code/select-html.txt': 'selectHtml',
      '/select/code/select-ts.txt': 'selectTs',
      '/select/code/select-scss.txt': 'selectScss',
      '/select/code/select-search.txt': 'selectSearch',
      '/select/code/option-html.txt': 'optionHtml',
      '/select/code/option-ts.txt': 'optionTs',
      '/select/code/option-scss.txt': 'optionScss',
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
