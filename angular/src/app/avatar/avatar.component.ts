import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
  imports: [CommonModule]
})
export class AvatarComponent {
  @Input() label: string = '';  // Label to display in the avatar
  @Input() size: 'small' | 'medium' | 'large' | 'xlarge' = 'medium';
  @Input() styleClass: string = '';
  @Input() style: { [key: string]: string } = {};
  @Input() shape: 'circle' | 'square' = 'square';
  @Input() image: string | null = null;
  @Input() content: string | null = null;

  get avatarClasses(): string {
    const classes = ['avatar', this.size, this.shape];
    if (this.styleClass) {
      classes.push(this.styleClass);
    }
    return classes.join(' ');
  }
}
