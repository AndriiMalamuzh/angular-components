import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dialog-content',
  template: '<ng-content />',
  styleUrl: './dialog-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentComponent {}
