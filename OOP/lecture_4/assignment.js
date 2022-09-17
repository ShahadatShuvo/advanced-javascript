//  Question 2:
// Please implement a software for a Coffee House using Object Oriented Programming. If you are not familiar or
// comfortable with object-oriented programming, we suggest you give this article a quick read to ensure you
// understand it before you attempt it.
// It should have the following features:
// -
// -
// Allow users to order a coffee from Espresso, Cappuccino, Latte.
// Allow users to specify add-ons: Milk, Cream, Latte
// Prices for the available options are as follows -->

// We need to define the solution as follows:

// Product/Add - on     Milk    Cream   Latte

// Espresso             60      75       100
// Cappuccino           80      90       125
// Latte                100     125      150

// 1. Display the combination of coffees that can be ordered
// 2. Allow users to choose their coffee type with the preferred add-on.
// 3. Generate the detailed bill/receipt with the amount to be paid.
// 4. Allow users to order more than 1 cup and more than 1 variety.

const orderList = [];
const customerInfo = {
  name: "shuvo",
  phone: "",
};
const priceList = {
  espresso: {
    milk: 60,
    cream: 75,
    latte: 100,
  },
  cappuccino: {
    milk: 80,
    cream: 90,
    latte: 125,
  },
  latte: {
    milk: 100,
    cream: 125,
    latte: 150,
  },
};

class Coffee {
  constructor(type, addOns) {
    this.type = type;
    this.addOns = addOns;
  }
  getPrice = function () {
    return {
      type: this.type,
      addOns: this.addOns,
      price: priceList[this.type][this.addOns],
    };
  };
}

class Order extends Coffee {
  constructor(customerName, customerPhone, type, addOns) {
    super(type, addOns);
    this.customerName = customerName;
    this.customerPhone = customerPhone;
  }
  placeOrder = function () {
    const newOrder = {
      ...this.getPrice(),
      customerName: this.customerName,
      customerPhone: this.customerPhone,
    };
    orderList.push(newOrder);
  };
  getAllorders = function () {
    return orderList;
  };
  getIndividualOrders = function () {
    return orderList.filter(
      (order) => order.customerName === this.customerName
    );
  };
  //   getTotal = function () {};
}

const order = new Order(
  customerInfo.name,
  customerInfo.phone,
  "cappuccino",
  "cream"
);
const order2 = new Order("shahadat", customerInfo.phone, "espresso", "latte");

// ekhane ami DOM use kore new order create korbo r data show korabe..
order.placeOrder();
order2.placeOrder();

console.log(order.getAllorders());
console.log(order.getIndividualOrders());
console.log(order2.getIndividualOrders());
