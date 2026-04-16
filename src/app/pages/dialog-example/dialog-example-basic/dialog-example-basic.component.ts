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
import { ButtonDirective } from 'src/app/shared/directives/button.directive';
import { DialogService } from 'src/app/shared/components/dialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { NestedDialogComponent } from './nested-dialog/nested-dialog.component';

@Component({
  selector: 'app-dialog-example-basic',
  imports: [
    ExampleComponent,
    TabComponent,
    TabGroupComponent,
    HighlightAuto,
    ButtonDirective,
  ],
  templateUrl: './dialog-example-basic.component.html',
  styleUrl: './dialog-example-basic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogExampleBasicComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly dialog = inject(DialogService);

  readonly lastResult = signal<string>('—');

  readonly fileContents = signal<Record<string, string>>({
    exampleHtml: '',
    exampleTs: '',
    exampleScss: '',
    usageHtml: '',
    usageTs: '',
    nestedHtml: '',
    nestedTs: '',
    nestedScss: '',
  });

  ngOnInit(): void {
    const fileMappings: Record<string, string> = {
      '/dialog/basic/example-html.txt': 'exampleHtml',
      '/dialog/basic/example-ts.txt': 'exampleTs',
      '/dialog/basic/example-scss.txt': 'exampleScss',
      '/dialog/basic/usage-html.txt': 'usageHtml',
      '/dialog/basic/usage-ts.txt': 'usageTs',
      '/dialog/basic/nested-html.txt': 'nestedHtml',
      '/dialog/basic/nested-ts.txt': 'nestedTs',
      '/dialog/basic/nested-scss.txt': 'nestedScss',
    };

    for (const [url, key] of Object.entries(fileMappings)) {
      this.loadFile(url, key);
    }
  }

  openDialog(): void {
    const ref = this.dialog.open<ConfirmDialogComponent, boolean>(
      ConfirmDialogComponent,
      {
        data: {
          title: 'Confirm action',
          message: 'Are you sure you want to proceed with this action?',
        },
        width: '480px',
      }
    );

    ref.afterClosed().subscribe(result => {
      this.lastResult.set(result ? 'Confirmed' : 'Cancelled');
    });
  }

  openWideDialog(): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Wide dialog',
        message:
          'This dialog has a custom width and a custom panel class applied.',
      },
      width: '720px',
      panelClass: 'wide-dialog',
    });

    ref.afterClosed().subscribe(result => {
      this.lastResult.set(result ? 'Confirmed' : 'Cancelled');
    });
  }

  openPersistentDialog(): void {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Persistent dialog',
        message:
          'This dialog cannot be closed by clicking the backdrop or pressing Escape. Use the buttons to close it.',
      },
      disableClose: true,
    });

    ref.afterClosed().subscribe(result => {
      this.lastResult.set(result ? 'Confirmed' : 'Cancelled');
    });
  }

  openNestedDialog(): void {
    const ref = this.dialog.open<NestedDialogComponent, string>(
      NestedDialogComponent,
      {
        data: {
          title: 'Outer dialog',
          message:
            'This is the outer dialog. You can open another dialog from here.',
        },
        width: '520px',
      }
    );

    ref.afterClosed().subscribe(result => {
      this.lastResult.set(result === 'inner-confirmed' ? 'Inner confirmed' : 'Closed');
    });
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
