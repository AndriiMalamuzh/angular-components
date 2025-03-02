import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-spinner-example-code',
  imports: [ExampleComponent, TabComponent, TabGroupComponent, HighlightAuto],
  templateUrl: './spinner-example-code.component.html',
  styleUrl: './spinner-example-code.component.scss',
})
export class SpinnerExampleCodeComponent implements OnInit {
  private http = inject(HttpClient);

  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
  };

  ngOnInit(): void {
    const fileMappings = {
      '/spinner/code/example-html.txt': 'exampleHtml',
      '/spinner/code/example-ts.txt': 'exampleTs',
      '/spinner/code/example-scss.txt': 'exampleScss',
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
