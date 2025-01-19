import {
  AfterContentInit,
  Component,
  contentChildren,
  signal,
} from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { RippleDirective } from 'src/app/shared/directives/ripple.directive';

@Component({
  selector: 'app-tab-group',
  imports: [RippleDirective],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.scss',
})
export class TabGroupComponent implements AfterContentInit {
  tabs = contentChildren(TabComponent);
  selectedIndex = signal<number>(0);

  ngAfterContentInit(): void {
    if (this.tabs()?.length) {
      this.selectTab(0);
    }
  }

  selectTab(index: number): void {
    this.selectedIndex.set(index);
    this.tabs().forEach((tab, i) => tab.active.set(i === index));
  }
}
