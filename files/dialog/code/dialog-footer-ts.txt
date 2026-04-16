import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dialog-footer',
  template: '<ng-content />',
  styleUrl: './dialog-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogFooterComponent {}
