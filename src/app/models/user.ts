export class User{
    id: number | undefined;
    firstName!: string;
    lastName!: string;
    birthDate!: Date;

    constructor(firstName: string, lastName: string, birthDate: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
      }
}