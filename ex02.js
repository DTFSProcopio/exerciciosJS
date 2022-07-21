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
console.log("All Products with 'id' attached:");
let id = 0;
products = products.map((element) => {
  id++;
  return { id, ...element };
});
console.log();
console.log("All products names:");
products.forEach((element) => console.log(element.name));

console.log();
console.log("ID 3 : ");
console.log(products.find((element) => element.id === 3));

console.log();
let productsWithColorBlack = products.filter((element) =>
  element.colors.includes("black")
);
console.log("Products with black color:  ");
productsWithColorBlack.forEach((element) => console.log(element));

console.log();
console.log("Products with no colors:");
const productsWithNoColor = products.filter(
  (element) => element.colors.length === 0
);
console.log(productsWithNoColor);
