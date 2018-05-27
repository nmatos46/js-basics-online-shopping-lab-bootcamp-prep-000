var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 
 //Randomly assign an item price between 1 and 100
 itemPrice = Math.floor((Math.random()*100) + 1)
 
 //Create object with name of the item as a key and price as a value
 var itemObj = Object.assign({},{'itemName':item, 'itemPrice':itemPrice})
 
 cart.push(itemObj)
 
 return `${item} has been added to your cart.`
 
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
