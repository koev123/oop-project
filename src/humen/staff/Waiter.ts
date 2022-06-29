import { Gender, Person } from "../Person";
import { Staff, StaffCategory } from "./Staff";

export class Waiter extends Staff {
  constructor(name: string, age: number, gender:Gender,category: StaffCategory,private salary:number) {
    super(category,name, age ,gender);
  } 

  getNameWaiter(){
    return this.name;
  }
}
