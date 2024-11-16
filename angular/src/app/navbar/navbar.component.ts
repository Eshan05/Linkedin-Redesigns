import { Component } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { MainIconsComponent } from "./main-icons/main-icons.component";
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggleComponent, MainIconsComponent, AvatarComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public themeService: ThemeService) { }
}
