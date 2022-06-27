
import { Gender } from "../Person";
import { Staff, StaffCategory } from "./Staff";


export class Cheff extends Staff {
  constructor(name: string, age: number, gender:Gender,category: StaffCategory) {
    super(category,name, age ,gender);
  }
}
