import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatDialogModule,FormsModule, MatInputModule, MatButtonModule, MatNativeDateModule, 
            ReactiveFormsModule,MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.css'
})

export class UserDialogComponent {
  @Output() usersChanged = new EventEmitter<void>();

  userForm: FormGroup = this.fb.group({
    firstName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
    lastName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
    birthDate: ['', Validators.required],
  });;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private fb: FormBuilder,
    private userService: UserService,
  ) {}
  
  isValid(){
    return this.userForm.valid;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.data && this.data.id) {
      this.updateUser(this.data);
    } else {
      this.addUser(this.data);
    }
  }

  addUser(user: any){
    this.userService.addUser(user).subscribe({
      next: (queryParams) => {
        this.usersChanged.emit(); 
    }
  });
  }

  updateUser(user: any){
    this.userService.updateUser(user).subscribe({
      next: (queryParams) => {
        this.usersChanged.emit(); 
    }
  });
  }
}
