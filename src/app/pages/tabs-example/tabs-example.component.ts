import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-tabs-example',
  imports: [ExampleComponent, TabGroupComponent, TabComponent, HighlightAuto],
  templateUrl: './tabs-example.component.html',
  styleUrl: './tabs-example.component.scss',
})
export class TabsExampleComponent implements OnInit {
  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    tabGroupHtml: '',
    tabGroupTs: '',
    tabGroupScss: '',
    tabHtml: '',
    tabTs: '',
    tabScss: '',
  };

  private http = inject(HttpClient);

  ngOnInit(): void {
    const fileMappings = {
      '/tabs/example-html.txt': 'exampleHtml',
      '/tabs/example-ts.txt': 'exampleTs',
      '/tabs/tab-group-html.txt': 'tabGroupHtml',
      '/tabs/tab-group-ts.txt': 'tabGroupTs',
      '/tabs/tab-group-scss.txt': 'tabGroupScss',
      '/tabs/tab-html.txt': 'tabHtml',
      '/tabs/tab-ts.txt': 'tabTs',
      '/tabs/tab-scss.txt': 'tabScss',
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
