import { Tablestatus } from "./TableStatus";
export class Table {
    constructor(id, chair = []) {
        this.id = id;
        this.chair = chair;
        this.status = Tablestatus.FREE;
        this.customer = undefined;
    }
    setCustomer(customer) {
        this.customer = customer;
    }
    hasCustomer() {
        return this.customer !== undefined;
    }
    getCustomer() {
        return this.customer;
    }
    getStatue() {
        return this.status;
    }
    setStatus(newStatus) {
        this.status = newStatus;
    }
}
