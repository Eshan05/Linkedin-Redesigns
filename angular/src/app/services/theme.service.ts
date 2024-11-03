import { Injectable } from '@angular/core';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    this.updateBodyClass();
  }

  toggleTheme() {
    this.darkMode.set(!this.darkMode());
    this.updateBodyClass();
    this.saveThemeToLocalStorage();
  }

  private getInitialTheme(): boolean {
    const theme = localStorage.getItem('theme');
    const browserDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme) {
      return theme === 'dark';
    }
    return browserDark;
  }

  private updateBodyClass() {
    document.body.classList.toggle('dark', this.darkMode());
  }

  private saveThemeToLocalStorage() {
    localStorage.setItem('theme', this.darkMode() ? 'dark' : 'light');
  }
}
