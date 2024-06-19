import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { SharedModule } from '../shared.module';
import {MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import {MatButton, MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    SharedModule,
    MatTableModule,
    UserDialogComponent,
    MatDialogModule,
    MatButtonModule,
    CommonModule,
    MatToolbar,
    MatButton,
    MatToolbarRow],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})

export class UserManagementComponent {
  public dataSource: User[] = [];
  newUser:  User | null = null; ;
  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'actions'];
  users: User[] = [];
  constructor(private userService: UserService, private dialog: MatDialog){
    this.fetchUsers();
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

    dialogRef.componentInstance.usersChanged.subscribe(() => {
      this.fetchUsers();
      dialogRef.close();
    });
  }
  
  fetchUsers(): void {
    this.userService.getUsers().subscribe({
        next: (queryParams) => {
        this.MapDataSource(queryParams);
      },
      error: (error) => {
        console.error('Error fetching users', error);
      }
    });
  }

  MapDataSource(queryParams:any)
  {
    this.dataSource = queryParams;
  }
  
  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe({
      next: () => {
        this.fetchUsers();
      },
      error: (error) => {
        console.error('Error deleting user', error);
      }
    });
  }
}

