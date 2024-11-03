import { NgIf } from '@angular/common';
import { Component, HostBinding, signal } from '@angular/core';
import { ThemeService } from '../services/theme.service'; // Adjust the path as necessary

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [NgIf],
  templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) { } // Injecting the service

  @HostBinding('class.dark') get mode() { return this.themeService.darkMode(); } // Using themeService
}
