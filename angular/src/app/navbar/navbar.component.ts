import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service'; // Adjust the path as necessary
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggleComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(public themeService: ThemeService) { }
}
