import { Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

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

  userForm: FormGroup = this.fb.group({
    firstName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
    lastName: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
    birthDate: ['', Validators.required],
  });;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private fb: FormBuilder
  ) {}
  
  isValid(){
    return this.userForm.valid;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
