import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ThemeToggleComponent } from "./theme-toggle/theme-toggle.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  darkMode = signal<boolean>(false);
  title = 'angular';
  // @HostBinding('class.dark') get mode() { return this.darkMode(); }
}
