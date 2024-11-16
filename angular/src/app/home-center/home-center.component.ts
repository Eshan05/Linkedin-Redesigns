import { Component } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-home-center',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './home-center.component.html',
  styleUrl: './home-center.component.css'
})
export class HomeCenterComponent {

}
