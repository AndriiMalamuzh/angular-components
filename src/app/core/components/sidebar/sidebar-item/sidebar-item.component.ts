import { Component, inject, input } from '@angular/core';
import { MenuInterface } from 'src/app/shared/interfaces/menu.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from 'src/app/core/components/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
})
export class SidebarItemComponent {
  private sidebarService = inject(SidebarService);

  item = input.required<MenuInterface>();

  onCloseSidebar(): void {
    this.sidebarService.onCloseSidebar();
  }
}
