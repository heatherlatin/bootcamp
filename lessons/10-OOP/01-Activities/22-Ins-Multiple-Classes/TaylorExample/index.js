const Item = require("./item.js");
const Order = require("./order.js");
const Restaurant = require("./restaurant.js");


const restaurant = new Restaurant("McJared's");

const items = [
  new Item("Burger", 5.99),
  new Item("Soda", 3.5),
  new Item("Chips", 2.0)
];

const orders = items.map(item => new Order(item));

orders.forEach(order => restaurant.takeOrder(order));

restaurant.prepareOrders();