export class User{
    id!: string;
    firstName!: string;
    lastName!: string;
    birthDate!: Date;

    constructor(firstName: string, lastName: string, birthDate: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
      }
}