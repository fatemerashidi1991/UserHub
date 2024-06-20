import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SharedModule } from './shared.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatButton, MatButtonModule, MatIconButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from './services/snackbar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [SnackbarService],
  imports: [
    SharedModule,
    RouterOutlet,
    FormsModule,
    HeaderComponent,
    MatToolbar,
    MatButton,
    MatToolbarRow,
    RouterModule,
    MatIconButton,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'user-hub';
  isLoggedIn: boolean = false;

  constructor(public authService: AuthService, private snackbarService: SnackbarService){
  }

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
