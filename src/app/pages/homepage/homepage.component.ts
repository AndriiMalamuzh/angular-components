import { Component } from '@angular/core';
import { MenuInterface } from 'src/app/shared/interfaces/menu.interface';
import { MENU } from 'src/app/shared/constants/menu';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  components: MenuInterface[] = MENU.filter(item => item.link !== '/');
  protected readonly environment = environment;
}
