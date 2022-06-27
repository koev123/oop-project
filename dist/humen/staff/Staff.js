import { Person } from "../Person";
export var StaffCategory;
(function (StaffCategory) {
    StaffCategory[StaffCategory["CHEFF"] = 0] = "CHEFF";
    StaffCategory[StaffCategory["WAITER"] = 1] = "WAITER";
})(StaffCategory || (StaffCategory = {}));
export class Staff extends Person {
    constructor(category, name, age, gender) {
        super(name, age, gender);
        this.category = category;
        this.salary = 0; // by default
    }
    setSalary(salary) {
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
