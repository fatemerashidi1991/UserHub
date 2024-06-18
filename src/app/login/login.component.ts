import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';
import { ErrorMessages } from '../constants/ErrorMessages';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  admin: Admin = new Admin('', '', new Date("1991.02.08"));

  constructor(private authService: AuthService, private router: Router){}

  login() {
    this.authService.login(this.admin).subscribe({
        next: (queryParams) => {
        this.handleResponse(queryParams);
      }
   });
  }
 
  handleResponse(queryParams:any)
  {
    if(queryParams.success == true)
      {
        console.log(ErrorMessages.loginSuccess);
        this.router.navigate(['/user-management']);
      }
      else{
        console.error('Login error', queryParams.message);
        alert(queryParams.message);
      }
  }
}
