"use strict";
exports.__esModule = true;
var Customer_1 = require("./humen/customer/Customer");
var Person_1 = require("./humen/Person");
var Cheff_1 = require("./humen/staff/Cheff");
var Staff_1 = require("./humen/staff/Staff");
var Waiter_1 = require("./humen/staff/Waiter");
var Restaurant_1 = require("./Restaurant");
var Chair_1 = require("./Table/Chair");
var Table_1 = require("./Table/Table");
var TableStatus_1 = require("./Table/TableStatus");
// create Restaurant
var restaurant = new Restaurant_1.Restaurant('PNC restaurant', 'Phnom penh');
//create customer
var cu1 = new Customer_1.Customer(1);
var cu2 = new Customer_1.Customer(2);
var cu3 = new Customer_1.Customer(3);
var cu4 = new Customer_1.Customer(4);
var cu5 = new Customer_1.Customer(5);
var cu6 = new Customer_1.Customer(6);
var cu7 = new Customer_1.Customer(7);
// create chair
var chair1 = new Chair_1.Chair(1);
var chair2 = new Chair_1.Chair(2);
var chair3 = new Chair_1.Chair(3);
var chair4 = new Chair_1.Chair(4);
var chair5 = new Chair_1.Chair(5);
var chair6 = new Chair_1.Chair(6);
var chair7 = new Chair_1.Chair(7);
//add customer to chair
chair1.addCustomer(cu1);
chair2.addCustomer(cu2);
chair3.addCustomer(cu3);
chair4.addCustomer(cu4);
chair5.addCustomer(cu5);
chair6.addCustomer(cu6);
chair7.addCustomer(cu7);
//  create table 
var table1 = new Table_1.Table(1, TableStatus_1.Tablestatus.FREE);
var table2 = new Table_1.Table(2, TableStatus_1.Tablestatus.FREE);
var table3 = new Table_1.Table(3, TableStatus_1.Tablestatus.FREE);
var table4 = new Table_1.Table(4, TableStatus_1.Tablestatus.FREE);
var table5 = new Table_1.Table(5, TableStatus_1.Tablestatus.FREE);
// add cahir to table
table1.addCahir(chair1);
table1.addCahir(chair2);
table1.addCahir(chair3);
table1.addCahir(chair4);
table2.addCahir(chair4);
table2.addCahir(chair5);
table2.addCahir(chair6);
table2.addCahir(chair7);
console.log(chair1);
console.log(table2);
// add chair to table
restaurant.addTable(table1);
restaurant.addTable(table2);
restaurant.addTable(table3);
restaurant.addTable(table4);
restaurant.addTable(table5);
// create chef
var chansokChef = new Cheff_1.Cheff(Staff_1.StaffCategory.CHEFF, 'chansok', 21, Person_1.Gender.FEMALE, 400);
// add cheff
restaurant.addCheff(chansokChef);
//create waiter
var koev = new Waiter_1.Waiter('koev', 20, Person_1.Gender.FEMALE, Staff_1.StaffCategory.WAITER, 200);
restaurant.addwaiter(koev);
console.log(restaurant);
