import {
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  signal,
} from '@angular/core';
import { SelectComponent } from 'src/app/shared/components/select/select.component';

@Component({
  selector: 'app-option',
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
})
export class OptionComponent {
  private select = inject(SelectComponent);
  el = inject(ElementRef);

  value = input<string>();
  isSelected = signal<boolean>(false);

  @HostListener('click')
  onClick() {
    this.select.selectOption(this);
  }
}
