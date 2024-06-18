import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { Router } from '@angular/router';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: User = new User('', '', new Date("1991.02.08"));

  constructor(private authService: AuthService, private router: Router){}

  login(){
    this.authService.login(this.user).subscribe(
      ()=>{
        console.log('Login successful!')
        this.router.navigate(['/user-management']);
      },
      error=>{
        console.error('Loging error', error);
        alert('Invalid credentials. Please try again.');
      }
    );
  }

}
