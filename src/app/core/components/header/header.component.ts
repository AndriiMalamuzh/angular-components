import { Component, inject } from '@angular/core';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { SidebarService } from 'src/app/core/components/sidebar/sidebar.service';
import { TitleComponent } from 'src/app/shared/components/title/title.component';

@Component({
  selector: 'app-header',
  imports: [IconComponent, TitleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private sidebarService = inject(SidebarService);

  onOpenSidebar(): void {
    this.sidebarService.onOpenSidebar();
  }
}
