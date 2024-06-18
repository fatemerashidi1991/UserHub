import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
  providedIn: 'root'  
})
export class UserService {
    private users: User[] = [];
    selectedUser:  User | null = null; ;

    constructor() {
        this.users = [
            new User('John Doe', 'john123', new Date('1990-01-01')),
            new User('Jane Smith', 'jane456', new Date('1985-05-15'))
          ];
    }

    getUsers(): User[] {
        return this.users;
    }

    addUser(user: User): void {
        this.users.push(user);
    }

    updateUser(): void {
        if(this.selectedUser)
            {
                //this.userService.updateUser();
                this.selectedUser = null;
            }
    }

    deleteUser(user:User):void {
        const index = this.users.indexOf(user);
        if(index !== -1)
            {
                this.users.splice(index, 1);
            }
    }
}