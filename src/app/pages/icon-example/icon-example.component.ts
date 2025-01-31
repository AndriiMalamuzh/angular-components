import { Component, inject, OnInit } from '@angular/core';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { HttpClient } from '@angular/common/http';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { HighlightAuto } from 'ngx-highlightjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-icon-example',
  imports: [
    IconComponent,
    ExampleComponent,
    TabGroupComponent,
    TabComponent,
    HighlightAuto,
  ],
  templateUrl: './icon-example.component.html',
  styleUrl: './icon-example.component.scss',
})
export class IconExampleComponent implements OnInit {
  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
    codeHtml: '',
    codeTs: '',
    codeScss: '',
    codeSvg: '',
  };

  private http = inject(HttpClient);

  ngOnInit(): void {
    const fileMappings = {
      '/icon/example-html.txt': 'exampleHtml',
      '/icon/example-ts.txt': 'exampleTs',
      '/icon/example-scss.txt': 'exampleScss',
      '/icon/html.txt': 'codeHtml',
      '/icon/ts.txt': 'codeTs',
      '/icon/scss.txt': 'codeScss',
      '/icon/svg.txt': 'codeSvg',
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
