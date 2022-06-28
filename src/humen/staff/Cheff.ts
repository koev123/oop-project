import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Cheff extends Staff {
  constructor(category: StaffCategory,name: string, age: number, gender:Gender,private salary:number,) {
    super(category,name,age,gender);
  }
}