import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ExampleComponent } from 'src/app/shared/components/example/example.component';
import { TabGroupComponent } from 'src/app/shared/components/tab-group/tab-group.component';
import { TabComponent } from 'src/app/shared/components/tab-group/tab/tab.component';
import { CheckboxComponent } from 'src/app/shared/components/checkbox/checkbox.component';
import { HighlightAuto } from 'ngx-highlightjs';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-checkbox-example',
  imports: [
    ExampleComponent,
    TabGroupComponent,
    TabComponent,
    CheckboxComponent,
    FormsModule,
    HighlightAuto,
    ReactiveFormsModule,
  ],
  templateUrl: './checkbox-example.component.html',
  styleUrl: './checkbox-example.component.scss',
})
export class CheckboxExampleComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  task: Task = {
    name: 'Indeterminate',
    completed: false,
    subtasks: [
      { name: 'First', completed: false },
      { name: 'Second', completed: true },
      { name: 'Third', completed: false },
    ],
  };
  allComplete = false;

  checkboxesArray = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
  ];
  form: FormGroup = this.fb.group({
    checkboxes: this.fb.array(
      this.checkboxesArray.map(() => new FormControl(false))
    ),
  });
  result = signal<string>('');

  fileContents: Record<string, string> = {
    exampleHtml1: '',
    exampleTs1: '',
    exampleScss1: '',
    exampleHtml2: '',
    exampleTs2: '',
    exampleScss2: '',
    codeHtml: '',
    codeTs: '',
    codeScss: '',
  };

  ngOnInit(): void {
    const fileMappings = {
      '/checkbox/example-html-1.txt': 'exampleHtml1',
      '/checkbox/example-ts-1.txt': 'exampleTs1',
      '/checkbox/example-scss-1.txt': 'exampleScss1',
      '/checkbox/example-html-2.txt': 'exampleHtml2',
      '/checkbox/example-ts-2.txt': 'exampleTs2',
      '/checkbox/example-scss-2.txt': 'exampleScss2',
      '/checkbox/html.txt': 'codeHtml',
      '/checkbox/ts.txt': 'codeTs',
      '/checkbox/scss.txt': 'codeScss',
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

  get checkboxes() {
    return this.form.get('checkboxes') as FormArray;
  }

  onChange(): void {
    const selectedOptions = this.form.value.checkboxes
      .map((checked: boolean, index: number) =>
        checked ? this.checkboxesArray[index].name : null
      )
      .filter((value: string) => value !== null);
    this.result.set(selectedOptions);
  }

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter(t => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => (t.completed = completed));
  }
}
