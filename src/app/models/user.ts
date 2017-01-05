export class User {
    public id: number;
    public password: string;
    public email: string;
    public firstName: string;
    public lastName: string;

    constructor(user: Object) {
      Object.assign(this, user);
    }
}
