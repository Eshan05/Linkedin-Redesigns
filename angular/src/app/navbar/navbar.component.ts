import { Component, HostListener } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { MainIconsComponent } from "./main-icons/main-icons.component";
import { AvatarComponent } from "../avatar/avatar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggleComponent, MainIconsComponent, AvatarComponent, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public themeService: ThemeService) { }
  dropdownVisible = false;
  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.profile-icon')) {
      this.dropdownVisible = false;
    }
  }
}
