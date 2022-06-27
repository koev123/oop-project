import { TableManager } from "./Table/tableManager";
export class Restaurant {
    constructor(name, address, table = []) {
        this.name = name;
        this.address = address;
        this.table = table;
        this.tables = new TableManager();
    }
    addTable(table) {
        return this.table.push(table);
    }
}
