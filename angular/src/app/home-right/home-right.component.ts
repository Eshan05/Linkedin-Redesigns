import { Component } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-home-right',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './home-right.component.html',
  styleUrl: './home-right.component.css'
})
export class HomeRightComponent {

}
