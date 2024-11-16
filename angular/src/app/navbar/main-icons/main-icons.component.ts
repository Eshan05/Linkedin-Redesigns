import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-icons.component.html',
})
export class MainIconsComponent {
  activeButton: number = 0;
  setActiveButton(index: number): void {
    this.activeButton = index;
  }
}
