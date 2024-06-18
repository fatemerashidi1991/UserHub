export class User{
    username!: string;
    password!: string;
    birthdate!: Date;

    constructor(username: string, password: string, birthdate: Date) {
        this.username = username;
        this.password = password;
        this.birthdate = birthdate;
      }
}