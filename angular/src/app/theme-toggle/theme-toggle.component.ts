import { NgIf } from '@angular/common';
import { Component, HostBinding, signal } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [NgIf],
  templateUrl: './theme-toggle.component.html',
  // styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  darkMode = signal<boolean>(false);
  @HostBinding('class.dark') get mode() { return this.darkMode(); }
}
