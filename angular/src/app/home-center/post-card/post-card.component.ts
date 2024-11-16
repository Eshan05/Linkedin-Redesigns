import { Component, Input } from '@angular/core';
import { AvatarComponent } from "../../avatar/avatar.component";

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  @Input() avatarImage: string = '';        // Avatar image URL
  @Input() userName: string = '';           // User name
  @Input() userTime: string = '';           // Time since post
  @Input() userDescription: string = '';    // User description
  @Input() postImage: string = '';          // Post image URL (Pptional)
  @Input() hashtags: string = '';           // Post hashtags
  @Input() postText: string = '';           // Post content (text)
}
