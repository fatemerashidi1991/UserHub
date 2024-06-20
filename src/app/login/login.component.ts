import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Admin } from '../models/admin';
import { Router } from '@angular/router';
import { SharedModule } from '../shared.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorMessages } from '../constants/ErrorMessages';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule, 
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  admin: Admin = new Admin('', '', new Date("1991.02.08"));
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder, private dialog: MatDialog){}

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.admin.username, this.admin.password).subscribe({
          next: (queryParams) => {
          this.handleLoginResponse(queryParams);
        },
        error: (err) => {
          console.error('Login error!', err.message);
          this.showError('An error occurred while attempting to login!, Please check username and password.');
        }
    });
    }
  }
 
  handleLoginResponse(queryParams:any)
  {
    if(this.authService.getToken() != null)
    {
      console.log(ErrorMessages.loginSuccess);
      this.router.navigate(['/user-management']);
    }
    else{
      console.error('Login error', queryParams.message);
      this.showError(queryParams.message);
    }
  }

  showError(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      width: '500px',
      height: '200px',
      data: { message }
    });
  }
}
