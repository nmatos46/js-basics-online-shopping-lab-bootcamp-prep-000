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
 
 //Randomly assign a price between 1 and 100
 itemPrice = Math.floor((Math.random()*100) + 1)
 
 var itemObj = Object.assign({},{'itemName':item, 'itemPrice':itemPrice})
 cart.push(itemObj)
 
 return 
 
 
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
