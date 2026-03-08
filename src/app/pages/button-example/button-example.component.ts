import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { ButtonDirective } from 'src/app/shared/directives/button.directive';
import { RouterLink } from '@angular/router';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-button-example',
  imports: [
    ExampleComponent,
    TabGroupComponent,
    TabComponent,
    ButtonDirective,
    RouterLink,
    IconComponent,
    HighlightAuto,
  ],
  templateUrl: './button-example.component.html',
  styleUrl: './button-example.component.scss',
})
export class ButtonExampleComponent implements OnInit {
  private http = inject(HttpClient);

  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
    codeTs: '',
    codeScss: '',
  };

  readonly flatLoading = signal<boolean>(false);
  readonly strokedLoading = signal<boolean>(false);

  ngOnInit(): void {
    const fileMappings = {
      '/button/example-html.txt': 'exampleHtml',
      '/button/example-ts.txt': 'exampleTs',
      '/button/example-scss.txt': 'exampleScss',
      '/button/ts.txt': 'codeTs',
      '/button/scss.txt': 'codeScss',
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

  onFlatLoadingClick(): void {
    this.flatLoading.set(true);
    setTimeout(() => this.flatLoading.set(false), 2000);
  }

  onStrokedLoadingClick(): void {
    this.strokedLoading.set(true);
    setTimeout(() => this.strokedLoading.set(false), 2000);
  }
}
