import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HighlightAuto } from 'ngx-highlightjs';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';

@Component({
  selector: 'app-dialog-example-code',
  imports: [ExampleComponent, TabComponent, TabGroupComponent, HighlightAuto],
  templateUrl: './dialog-example-code.component.html',
  styleUrl: './dialog-example-code.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExampleCodeComponent implements OnInit {
  private readonly http = inject(HttpClient);

  readonly fileContents = signal<Record<string, string>>({
    exampleService: '',
    exampleRef: '',
    exampleConfig: '',
    exampleContainerHtml: '',
    exampleContainerTs: '',
    exampleClose: '',
    headerHtml: '',
    headerTs: '',
    headerScss: '',
    contentTs: '',
    contentScss: '',
    footerTs: '',
    footerScss: '',
  });

  ngOnInit(): void {
    const fileMappings: Record<string, string> = {
      '/dialog/code/dialog-service.txt': 'exampleService',
      '/dialog/code/dialog-ref.txt': 'exampleRef',
      '/dialog/code/dialog-config.txt': 'exampleConfig',
      '/dialog/code/dialog-container-html.txt': 'exampleContainerHtml',
      '/dialog/code/dialog-container-ts.txt': 'exampleContainerTs',
      '/dialog/code/dialog-close.txt': 'exampleClose',
      '/dialog/code/dialog-header-html.txt': 'headerHtml',
      '/dialog/code/dialog-header-ts.txt': 'headerTs',
      '/dialog/code/dialog-header-scss.txt': 'headerScss',
      '/dialog/code/dialog-content-ts.txt': 'contentTs',
      '/dialog/code/dialog-content-scss.txt': 'contentScss',
      '/dialog/code/dialog-footer-ts.txt': 'footerTs',
      '/dialog/code/dialog-footer-scss.txt': 'footerScss',
    };

    for (const [url, key] of Object.entries(fileMappings)) {
      this.loadFile(url, key);
    }
  }

  private loadFile(url: string, key: string): void {
    this.http
      .get(`${environment.publicUrl}files${url}`, { responseType: 'text' })
      .subscribe({
        next: res =>
          this.fileContents.update(contents => ({
            ...contents,
            [key]: res,
          })),
        error: error => console.error(`Error loading file ${url}`, error),
      });
  }
}
