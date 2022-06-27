"use strict";
exports.__esModule = true;
var Customer_1 = require("./humen/customer/Customer");
var Restaurant_1 = require("./Restaurant");
var Table_1 = require("./Table/Table");
// create Restaurant
var restaurant = new Restaurant_1.Restaurant('PNC restaurant', 'Phnom penh');
// create Chair
//  create table 
var table1 = new Table_1.Table(1);
var table2 = new Table_1.Table(2);
var table3 = new Table_1.Table(3);
var table4 = new Table_1.Table(4);
var table5 = new Table_1.Table(5);
//  add table in restaurant
restaurant.addTable(table1);
restaurant.addTable(table2);
restaurant.addTable(table3);
restaurant.addTable(table4);
restaurant.addTable(table5);
//create customer
var customer1 = new Customer_1.Customer(1);
//add customer in table
console.log(restaurant);
