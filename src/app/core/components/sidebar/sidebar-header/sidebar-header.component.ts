import { Component, inject } from '@angular/core';
import { TitleComponent } from 'src/app/shared/components/title/title.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { SidebarService } from 'src/app/core/components/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar-header',
  imports: [TitleComponent, IconComponent],
  templateUrl: './sidebar-header.component.html',
  styleUrl: './sidebar-header.component.scss',
})
export class SidebarHeaderComponent {
  private sidebarService = inject(SidebarService);

  onClose(): void {
    this.sidebarService.onCloseSidebar();
  }
}
