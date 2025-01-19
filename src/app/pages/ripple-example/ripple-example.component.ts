import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { HighlightAuto } from 'ngx-highlightjs';
import { RippleDirective } from 'src/app/shared/directives/ripple.directive';

@Component({
  selector: 'app-ripple-example',
  imports: [
    ExampleComponent,
    TabGroupComponent,
    TabComponent,
    HighlightAuto,
    RippleDirective,
  ],
  templateUrl: './ripple-example.component.html',
  styleUrl: './ripple-example.component.scss',
})
export class RippleExampleComponent implements OnInit {
  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleScss: '',
    codeTs: '',
    codeScss: '',
  };

  private http = inject(HttpClient);

  ngOnInit(): void {
    const fileMappings = {
      '/ripple/example-html.txt': 'exampleHtml',
      '/ripple/example-scss.txt': 'exampleScss',
      '/ripple/ts.txt': 'codeTs',
      '/ripple/scss.txt': 'codeScss',
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
