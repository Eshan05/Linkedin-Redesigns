import { Component } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-home-left',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './home-left.component.html',
  styleUrl: './home-left.component.css'
})
export class HomeLeftComponent {

}
