import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SharedModule } from '../shared.module';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule,MatToolbar,MatButton,MatToolbarRow,RouterModule,MatIconButton,MatIconModule],
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
