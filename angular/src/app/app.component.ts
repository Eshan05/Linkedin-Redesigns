import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ThemeToggleComponent } from "./theme-toggle/theme-toggle.component";
import { ThemeService } from './services/theme.service';
import { CommonModule } from '@angular/common';
import { HomeLeftComponent } from "./home-left/home-left.component";
import { HomeCenterComponent } from "./home-center/home-center.component";
import { HomeRightComponent } from "./home-right/home-right.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, HomeLeftComponent, HomeCenterComponent, HomeRightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
  darkMode = signal<boolean>(false);
  // @HostBinding('class.dark') get mode() { return this.darkMode(); }

  constructor(public themeService: ThemeService) { }
}
