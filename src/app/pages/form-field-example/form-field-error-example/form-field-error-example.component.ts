import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-form-field-error-example',
  imports: [ExampleComponent, TabComponent, TabGroupComponent, HighlightAuto],
  templateUrl: './form-field-error-example.component.html',
  styleUrl: './form-field-error-example.component.scss',
})
export class FormFieldErrorExampleComponent implements OnInit {
  private http = inject(HttpClient);

  fileContents: Record<string, string> = {
    codeHtml: '',
    codeTs: '',
    codeScss: '',
  };

  ngOnInit(): void {
    const fileMappings = {
      '/form-field-error/html.txt': 'codeHtml',
      '/form-field-error/ts.txt': 'codeTs',
      '/form-field-error/scss.txt': 'codeScss',
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
