export interface User {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly prefix: string;
  readonly position: string;
  readonly picture: string;
  readonly birthDate: Date;
  readonly hireDate: Date;
  readonly assignedTasks: number;
  readonly notes: string;
  readonly address: string;
  readonly phoneNumber: string;
  readonly email: string;
}
