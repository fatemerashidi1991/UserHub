import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn(); 
  }

  logout(): void {
    this.authService.logout();
  }
}
