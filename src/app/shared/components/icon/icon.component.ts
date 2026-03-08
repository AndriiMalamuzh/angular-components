import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly size = input<number>(24);
  readonly file = input<string>('main');

  readonly iconHref = computed(
    () => `${environment.publicUrl}icons/${this.file()}.svg#${this.name()}`
  );
}
