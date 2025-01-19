import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
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
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  selectedIndex = 0;

  ngAfterContentInit(): void {
    const activeTabs = this.tabs.toArray();
    if (activeTabs.length) {
      this.selectTab(0);
    }
  }

  selectTab(index: number): void {
    this.selectedIndex = index;
    this.tabs.toArray().forEach((tab, i) => (tab.active = i === index));
  }
}
