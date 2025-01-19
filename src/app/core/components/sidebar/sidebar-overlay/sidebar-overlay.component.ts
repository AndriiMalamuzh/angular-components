import { Component, inject } from '@angular/core';
import { NgClass } from '@angular/common';
import { SidebarService } from 'src/app/core/components/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar-overlay',
  imports: [NgClass],
  templateUrl: './sidebar-overlay.component.html',
  styleUrl: './sidebar-overlay.component.scss',
})
export class SidebarOverlayComponent {
  private sidebarService = inject(SidebarService);

  isOpen = this.sidebarService.isOpenSignal;

  onCloseSidebar(): void {
    this.sidebarService.onCloseSidebar();
  }
}
