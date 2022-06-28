import { Gender, Person } from "../Person";

export enum StaffCategory {
 CHEFF='CHEFF',
 WAITER='WAITER',
}

export class Staff extends Person {
  constructor(
    protected category: StaffCategory,
   
    name: string,
    age: number,
    gender: Gender
  ) {
    super(name, age, gender);
  }
}
