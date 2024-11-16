import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ThemeToggleComponent } from "./theme-toggle/theme-toggle.component";
import { ThemeService } from './services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  darkMode = signal<boolean>(false);
  // @HostBinding('class.dark') get mode() { return this.darkMode(); }

  constructor(public themeService: ThemeService) { }
}
