import { Staff } from "./Staff";
export class Cheff extends Staff {
    constructor(name, age, gender, category) {
        super(category, name, age, gender);
    }
}
