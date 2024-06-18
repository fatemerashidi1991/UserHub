import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SharedModule } from './shared.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatButton, MatIconButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule,RouterOutlet,FormsModule,HeaderComponent,MatToolbar,MatButton,MatToolbarRow,RouterModule,MatIconButton,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'user-hub';
  isLoggedIn: boolean = false;

  constructor(public authService: AuthService, private router: Router){
    this.isLoggedIn = this.authService.isLoggedIn(); 
  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  logout(): void {
    this.router.navigate(['/login']);
    this.authService.logout();
  }
}
