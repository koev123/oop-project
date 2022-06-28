import { Customer } from "./humen/customer/Customer";
import { Gender } from "./humen/Person";
import { Cheff } from "./humen/staff/Cheff";
import { StaffCategory } from "./humen/staff/Staff";
import { Waiter } from "./humen/staff/Waiter";
import { Restaurant } from "./Restaurant";
import { Chair } from "./Table/Chair";
import { Table } from "./Table/Table";
import { Tablestatus } from "./Table/TableStatus";


// create Restaurant
let restaurant= new Restaurant('PNC restaurant','Phnom penh');

//create customer
let cu1=new Customer(1)
let cu2=new Customer(2)
let cu3=new Customer(3)
let cu4=new Customer(4)
let cu5=new Customer(5)
let cu6=new Customer(6)
let cu7=new Customer(7)


// create chair
let chair1=new Chair(1)
let chair2=new Chair(2)
let chair3=new Chair(3)
let chair4=new Chair(4)
let chair5=new Chair(5)
let chair6=new Chair(6)
let chair7=new Chair(7)


//add customer to chair

chair1.addCustomer(cu1);
chair2.addCustomer(cu2);
chair3.addCustomer(cu3);
chair4.addCustomer(cu4);
chair5.addCustomer(cu5);
chair6.addCustomer(cu6);
chair7.addCustomer(cu7);

//  create table 
let table1=new Table(1,Tablestatus.FREE);
let table2=new Table(2,Tablestatus.FREE);
let table3=new Table(3,Tablestatus.FREE);
let table4=new Table(4,Tablestatus.FREE);
let table5=new Table(5,Tablestatus.FREE);

// add cahir to table
table1.addCahir(chair1)
table1.addCahir(chair2)
table1.addCahir(chair3)
table1.addCahir(chair4)
table2.addCahir(chair4)
table2.addCahir(chair5)
table2.addCahir(chair6)
table2.addCahir(chair7)

// add chair to table
restaurant.addTable(table1)
restaurant.addTable(table2)
restaurant.addTable(table3)
restaurant.addTable(table4)
restaurant.addTable(table5)

// create chef
let chansokChef=new Cheff(StaffCategory.CHEFF,'chansok',21,Gender.FEMALE,400);

// add cheff
restaurant.addCheff(chansokChef);

//create waiter
let koev =new Waiter('koev',20,Gender.FEMALE,StaffCategory.WAITER,200);
restaurant.addwaiter(koev)


console.log(restaurant)