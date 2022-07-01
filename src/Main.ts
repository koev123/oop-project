import { Customer } from "./humen/customer/Customer";
import { Gender } from "./humen/Person";
import { Cheff } from "./humen/staff/Cheff";
import { StaffCategory } from "./humen/staff/Staff";
import { Waiter } from "./humen/staff/Waiter";
import { MainDrinkCategory } from "./menu/MainDrinkCategory";
import { MainFoodCategory } from "./menu/MainFoodCategory";
import { Restaurant } from "./Restaurant";
import { Table } from "./Table/Table";
import { Drink } from "./menu/Drink";
import { Food } from "./menu/Food";

import { Order } from "./menu/Order";
import { MenuItem } from "./menu/MenuItem";
import { Recept } from "./Table/Recept";

//---------------------------------block Restaurant-------------------------
// create Restaurant
let restaurant= new Restaurant('PNC restaurant','Phnom penh'); 

// create chef
let chansokChef = new Cheff(StaffCategory.CHEFF,'chansok',21,Gender.FEMALE,400);
restaurant.addCheff(chansokChef);

//create waiter
let koev = new Waiter('koev',20,Gender.FEMALE,StaffCategory.WAITER,200);
let phanith = new Waiter('phanith',20,Gender.MALE,StaffCategory.WAITER,200);
restaurant.addwaiter(koev)
restaurant.addwaiter(phanith)

//  create table 
let table1=new Table(1);
let table2=new Table(2);
let table3=new Table(3);
let table4=new Table(4);

//------------------------------block Customer--------------------------
// create customer
let cu1=new Customer(1)
let cu2=new Customer(2)
let cu3=new Customer(3)
let cu4=new Customer(4)

table1.addCustomer(cu1)
table2.addCustomer(cu2)
table3.addCustomer(cu3)
table4.addCustomer(cu4)
// add Customer to table
table1.getCustoner()
table2.getCustoner()
table3.getCustoner()
table4.getCustoner()
// add restauant to table
restaurant.addTable(table1)
restaurant.addTable(table2)
restaurant.addTable(table3)
restaurant.addTable(table4)
// --------------------Block Order-----------------------
// create Item_Drink
let drink1 = new Drink (1,'Beer',2.50,MainDrinkCategory.ABC_BEER); 
let drink2 = new Drink (2,'Coke',1,MainDrinkCategory.COCACOLA); 
let drink3 = new Drink (3,'juice',1,MainDrinkCategory.COLAN_JUICE); 
let drink4 = new Drink (4,'Beer',2.50,MainDrinkCategory.ANGKOR_BEER); 
// create Item_Food
let food1 = new Food(1,'sea food',12,MainFoodCategory.CRAB_GINGER);
let food2 = new Food(2,'sea food',12,MainFoodCategory.BROW_PAPER);
let food3 = new Food(3,'sea food',8,MainFoodCategory.CLAM_GRILL);
let food4 = new Food(4,'Pizza',9,MainFoodCategory.PIZZA);
// Create OrderItem & Add Item
let orderItem1 = new MenuItem();
orderItem1.addItem(drink1);
orderItem1.addItem(drink3);
orderItem1.addItem(drink4);
orderItem1.addItem(drink2);
orderItem1.addItem(food1);
orderItem1.addItem(food4);
orderItem1.addItem(food3);
orderItem1.addItem(food1);
orderItem1.addItem(food2);
orderItem1.getItem();
// create order
let order1 = new Order(1);
// add Item to Order.
order1.addItem(drink1)
order1.addItem(drink2)
order1.addItem(drink4)
order1.addItem(food2)
order1.addItem(food3)
order1.addItem(food4)
order1.addItem(food1)
// add waiter to order.
order1.addWaiter(koev);
// set order on table
order1.setTable(table1);
// addOrderList to Cheff
chansokChef.addOrderlist(order1);
// console.log(chansokChef);

// recept managerman
let receipt = new Recept();

// --------console.log----For keov----------
// console.log(table1)
// console.log(restaurant);

//------------consol.log--------------------------
// console.log(orderItem1.getItem());

// console.log(order1);

console.log(receipt.receipt(order1));

