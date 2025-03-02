import { Component, inject, OnInit } from '@angular/core';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-spinner-example-basic',
  imports: [
    ExampleComponent,
    TabComponent,
    TabGroupComponent,
    SpinnerComponent,
    HighlightAuto,
  ],
  templateUrl: './spinner-example-basic.component.html',
  styleUrl: './spinner-example-basic.component.scss',
})
export class SpinnerExampleBasicComponent implements OnInit {
  private http = inject(HttpClient);

  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
  };

  ngOnInit(): void {
    const fileMappings = {
      '/spinner/basic/example-html.txt': 'exampleHtml',
      '/spinner/basic/example-ts.txt': 'exampleTs',
      '/spinner/basic/example-scss.txt': 'exampleScss',
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
