import { Component, input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent {
  protected readonly environment = environment;

  name = input.required<string>();
  size = input<number>(24);
}
