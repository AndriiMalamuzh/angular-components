import { Component, inject, model, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { SlideToggleComponent } from 'src/app/shared/components/slide-toggle/slide-toggle.component';
import { HighlightAuto } from 'ngx-highlightjs';

@Component({
  selector: 'app-slide-toggle-example',
  imports: [
    ExampleComponent,
    TabGroupComponent,
    TabComponent,
    ReactiveFormsModule,
    SlideToggleComponent,
    FormsModule,
    HighlightAuto,
  ],
  templateUrl: './slide-toggle-example.component.html',
  styleUrl: './slide-toggle-example.component.scss',
})
export class SlideToggleExampleComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private http = inject(HttpClient);

  isChecked = model<boolean>(true);
  formGroup = this.formBuilder.group({
    toggle: '',
  });
  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
    codeHtml: '',
    codeTs: '',
    codeScss: '',
  };

  onChange(event: boolean): void {
    console.log(event);
  }

  ngOnInit(): void {
    const fileMappings = {
      '/slide-toggle/example-html.txt': 'exampleHtml',
      '/slide-toggle/example-ts.txt': 'exampleTs',
      '/slide-toggle/example-scss.txt': 'exampleScss',
      '/slide-toggle/html.txt': 'codeHtml',
      '/slide-toggle/ts.txt': 'codeTs',
      '/slide-toggle/scss.txt': 'codeScss',
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
