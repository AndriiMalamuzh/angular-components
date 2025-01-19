import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from 'src/app/core/components/sidebar/sidebar.service';
import { MenuInterface } from 'src/app/shared/interfaces/menu.interface';
import { MENU } from 'src/app/shared/contants/menu';
import { SidebarHeaderComponent } from 'src/app/core/components/sidebar/sidebar-header/sidebar-header.component';
import { SidebarOverlayComponent } from 'src/app/core/components/sidebar/sidebar-overlay/sidebar-overlay.component';
import { SidebarItemComponent } from 'src/app/core/components/sidebar/sidebar-item/sidebar-item.component';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    SidebarHeaderComponent,
    SidebarOverlayComponent,
    SidebarItemComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private sidebarService = inject(SidebarService);

  menu: MenuInterface[] = MENU;
  isOpen = this.sidebarService.isOpenSignal;
}
