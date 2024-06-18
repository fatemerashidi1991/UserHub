import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { SharedModule } from '../shared.module';
import {MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [SharedModule, MatTableModule, UserDialogComponent, MatDialogModule, MatButtonModule, CommonModule ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})

export class UserManagementComponent {
  public dataSource: User[] = [];
  newUser:  User | null = null; ;
  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'actions'];

  constructor(private userService: UserService, private dialog: MatDialog){
    this.dataSource = userService.getUsers();
  }

  openDialog(user?: User): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '350px',
      data: user ? { ...user } : { id: null, firstName: '', lastName: '', birthDate: '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (user) {
          this.userService.updateUser(result);
        } else {
          this.userService.addUser(result);
        }
      }
    });
  }

  deleteUser(userId: string): void {
    this.userService.deleteUser(userId);
  }

  addUser():void{
  }
}

