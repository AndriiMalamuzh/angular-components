import { Component, inject, OnInit } from '@angular/core';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HighlightAuto } from 'ngx-highlightjs';
import { ButtonDirective } from 'src/app/shared/directives/button.directive';
import { ToastService } from 'src/app/shared/components/toast/toast.service';

@Component({
  selector: 'app-toast-example-basic',
  imports: [
    ExampleComponent,
    TabComponent,
    TabGroupComponent,
    HighlightAuto,
    ButtonDirective,
  ],
  templateUrl: './toast-example-basic.component.html',
  styleUrl: './toast-example-basic.component.scss',
})
export class ToastExampleBasicComponent implements OnInit {
  private http = inject(HttpClient);
  private toastService = inject(ToastService);

  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
  };

  ngOnInit(): void {
    const fileMappings = {
      '/toast/basic/example-html.txt': 'exampleHtml',
      '/toast/basic/example-ts.txt': 'exampleTs',
      '/toast/basic/example-scss.txt': 'exampleScss',
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

  onSuccess(): void {
    this.toastService.open({
      message: 'Lorem ipsum dolor',
    });
  }

  onError(): void {
    this.toastService.open({
      message: 'Lorem ipsum dolor sit',
      type: 'error',
    });
  }

  onWarning(): void {
    this.toastService.open({
      message: 'Lorem ipsum dolor sit amet!',
      type: 'warning',
    });
  }

  onInfo(): void {
    this.toastService.open({
      message:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, reprehenderit',
      type: 'info',
    });
  }
}
