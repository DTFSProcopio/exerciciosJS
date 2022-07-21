let products = [
  {
    name: "Macbook",
    price: 1300,
    quantity: 40,
    colors: ["silver", "black", "white"],
  },
  {
    name: "Iphone",
    price: 1000,
    quantity: 50,
    colors: ["silver", "red", "white"],
  },
  { name: "Pendrive", price: 10, quantity: 10, colors: [] },
  { name: "Headset", price: 50, quantity: 0, colors: ["black"] },
  { name: "Mouse", price: 20, quantity: 5, colors: ["white", "black", "blue"] },
  { name: "Tablet", price: 500, quantity: 20, colors: ["white", "black"] },
  { name: "USB adaptor", price: 5, quantity: 0, colors: [] },
  { name: "Keyboard", price: 30, quantity: 35, colors: ["white"] },
  { name: "Gamepad", price: 30, quantity: 25, colors: ["black", "silver"] },
  { name: "Monitor", price: 200, quantity: 3, colors: [] },
];

console.log("Products with new item:");
products.push({
  name: "Gaming chair",
  price: 600,
  quantity: 2,
  colors: ["white", "black"],
});
console.log(products);

console.log();
console.log("Only products in stock:");
products = products.filter((element) => element.quantity > 0);
console.log(products);

console.log();
console.log("Sum of all the stock: ");
let storageSum = 0;
products.forEach((element) => {
  storageSum += element.quantity;
});
console.log(storageSum);

console.log();
console.log("Products with prices above or equal 40:");
console.log(products.filter((element) => element.price >= 40));

console.log();
console.log("All products with 'o' in it's name:");
console.log(products.filter((element) => element.name.includes("o")));
