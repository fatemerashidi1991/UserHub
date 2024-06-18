import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  public users: User[] = [];
  newUser:  User | null = null; ;

  constructor(private userService: UserService){
    this.users = userService.getUsers();
  }

  addUser():void{

  }
}
