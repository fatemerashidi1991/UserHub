import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { SharedModule } from '../shared.module';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [SharedModule,MatTableModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  public dataSource: User[] = [];
  newUser:  User | null = null; ;
  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate'];

  constructor(private userService: UserService){
    this.dataSource = userService.getUsers();
  }

  addUser():void{

  }
}

