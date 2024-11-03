import { NgIf } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [NgIf],
  templateUrl: './theme-toggle.component.html',
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) { }
  @HostBinding('class.dark') get mode() { return this.themeService.darkMode(); }
}
