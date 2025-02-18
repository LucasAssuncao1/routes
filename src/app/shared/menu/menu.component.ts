import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SobreComponent } from '../../pages/sobre/sobre.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterLink , RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
