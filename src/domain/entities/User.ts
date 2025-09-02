export class User {
  constructor(
    public id: string,
    public email: string,
    public passwordHash: string
  ) {}

  validateEmail(): boolean {
    return /\S+@\S+\.\S+/.test(this.email);
  }
}
