import { Component, inject, OnInit } from '@angular/core';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RadioComponent } from 'src/app/shared/components/radio/radio.component';
import { HighlightAuto } from 'ngx-highlightjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-radio-example',
  imports: [
    ExampleComponent,
    TabGroupComponent,
    TabComponent,
    ReactiveFormsModule,
    RadioComponent,
    HighlightAuto,
  ],
  templateUrl: './radio-example.component.html',
  styleUrl: './radio-example.component.scss',
})
export class RadioExampleComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  form: FormGroup = this.fb.group({
    language: ['Ukrainian'],
  });

  fileContents: Record<string, string> = {
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
    codeHtml: '',
    codeTs: '',
    codeScss: '',
  };

  ngOnInit(): void {
    const fileMappings = {
      '/radio/example-html.txt': 'exampleHtml',
      '/radio/example-ts.txt': 'exampleTs',
      '/radio/example-scss.txt': 'exampleScss',
      '/radio/html.txt': 'codeHtml',
      '/radio/ts.txt': 'codeTs',
      '/radio/scss.txt': 'codeScss',
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
