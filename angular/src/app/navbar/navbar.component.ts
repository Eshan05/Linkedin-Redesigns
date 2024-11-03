import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { MainIconsComponent } from "./main-icons/main-icons.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggleComponent, MainIconsComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(public themeService: ThemeService) { }
}
