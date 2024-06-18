export class Admin{
    username!: string;
    password!: string;

    constructor(username: string, password: string, birthdate: Date) {
        this.username = username;
        this.password = password;
      }
}