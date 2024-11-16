import { Component } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";
import { PostCardComponent } from "./post-card/post-card.component";

@Component({
  selector: 'app-home-center',
  standalone: true,
  imports: [AvatarComponent, PostCardComponent],
  templateUrl: './home-center.component.html',
  styleUrl: './home-center.component.css'
})
export class HomeCenterComponent {

}
