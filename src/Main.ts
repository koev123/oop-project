import { Customer } from "./customer/Customer";
import { Restaurant } from "./Restaurant";
import { Chair } from "./Table/Chair";
import { Table } from "./Table/Table";

// create Restaurant
let restaurant= new Restaurant('PNC restaurant','Phnom penh');
// create Chair





//  create table 
let table1=new Table(1);
let table2=new Table(2);
let table3=new Table(3);
let table4=new Table(4);
let table5=new Table(5);
//  add table in restaurant
restaurant.addTable(table1)
restaurant.addTable(table2)
restaurant.addTable(table3)
restaurant.addTable(table4)
restaurant.addTable(table5)

//create customer

let customer1=new Customer(1);

//add customer in table




console.log(restaurant)