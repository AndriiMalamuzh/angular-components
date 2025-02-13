import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { BadgeDirective } from 'src/app/shared/directives/badge.directive';
import { HighlightAuto } from 'ngx-highlightjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-badge-example',
  imports: [
    ExampleComponent,
    TabGroupComponent,
    TabComponent,
    IconComponent,
    BadgeDirective,
    HighlightAuto,
  ],
  templateUrl: './badge-example.component.html',
  styleUrl: './badge-example.component.scss',
})
export class BadgeExampleComponent implements OnInit {
  private http = inject(HttpClient);

  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
    codeTs: '',
    codeScss: '',
  };

  ngOnInit(): void {
    const fileMappings = {
      '/badge/example-html.txt': 'exampleHtml',
      '/badge/example-ts.txt': 'exampleTs',
      '/badge/example-scss.txt': 'exampleScss',
      '/badge/ts.txt': 'codeTs',
      '/badge/scss.txt': 'codeScss',
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
