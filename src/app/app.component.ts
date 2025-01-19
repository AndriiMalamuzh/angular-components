import { Component } from '@angular/core';
import { SidebarComponent } from 'src/app/core/components/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
