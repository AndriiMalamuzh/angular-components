import { Component, inject, OnInit } from '@angular/core';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { HighlightAuto } from 'ngx-highlightjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-input-example-directive',
  imports: [ExampleComponent, TabComponent, TabGroupComponent, HighlightAuto],
  templateUrl: './input-example-directive.component.html',
  styleUrl: './input-example-directive.component.scss',
})
export class InputExampleDirectiveComponent implements OnInit {
  private http = inject(HttpClient);

  fileContents: Record<string, string> = {
    exampleTs: '',
  };

  ngOnInit(): void {
    const fileMappings = {
      '/input/directive/example-ts.txt': 'exampleTs',
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
