import { Staff } from "./Staff";
export class Waiter extends Staff {
    constructor(name, age, gender, category) {
        super(category, name, age, gender);
    }
}
