// Khởi tạo lớp Customer
class user {
  // Khởi tạo thuộc tính
  constructor(balance, name, email,pass) {
      this.name = name;
      this.email = email;
      this.pass= pass;
      this.balance=balance;

  }
  // Khởi tạo phương thức
  buy(shop, item) {
      if (this.balance >= item.price) {
          this.balance -= item.price;
          shop.sell(item);
          console.log(this.name + ' bought ' + item.name);
      } else {
          console.log('Insufficient funds');
      }
  }
}
// Khởi tạo lớp Shop
class Shop {
  // Khởi tạo thuộc tính
  constructor(name, inventory) {
      this.name = name;
      this.inventory = inventory;
  }
  // Khởi tạo phương thức
  sell(item) {
      this.inventory.push(item);
      console.log(this.name + ' sold ' + item.name);
  }
}
// Khởi tạo đối tượng
var customer = new user('John Doe', 100);
var shop = new Shop('My Shop', []);
// Khởi tạo đối tượng item
var item = {
  name: 'Shirt',
  price: 50
};
// Gọi phương thức buy
customer.buy(shop, item);