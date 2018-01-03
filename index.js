var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 99) + 1
 var newItem = { [item] : price}
 console.log (item + " has been added to your cart.")
 cart.push(newItem)
 return cart
}

function viewCart() {
  var keyNames = []
  var valueNames = []
  var str = "In your cart, you have "
  
  for (let i=0; i < cart.length; i++) {  
    keyNames[i] = Object.keys(cart[i])
    valueNames[i] = Object.values(cart[i])
  }

  if (cart.length === 0) {
    console.log ("Your shopping cart is empty.")
  }
  
  else if (cart.length === 1) {
    str += keyNames[0] + " at $" + valueNames[0] + "."
  }
  
  else if (cart.length === 2) {
    str += keyNames[0] + " at $" + valueNames[0] + " and " + keyNames[1] + " at $" + valueNames[1] + "."
  }
  
  else {
    for(let i=0; i<keyNames.length-1; i++) {
      str += keyNames[i] + " at $" + valueNames[i] + ", "
    }
    str += "and " + (keyNames[keyNames.length-1]) + " at $" + valueNames[valueNames.length-1] + "."
  }
  
  console.log (str)
}

function total() {
  var valueNames = []
  var sum = 0
  
  for (let i=0; i < cart.length; i++) {  
    valueNames[i] = parseInt(Object.values(cart[i]))
    sum += valueNames[i]
  }
  return sum
}

function removeFromCart(item) {
  var inCart = false

  for (let i=0; i<cart.length; i++) {
    if(String(Object.keys(cart[i])) === item) {
      inCart = true
      console.log(cart)
      console.log(cart.splice(i,i))
    }
    console.log(inCart)
    
  }
}

function placeOrder(cardNumber) {
  // write your code here
}

addToCart("banana")
addToCart("peach")

removeFromCart("banana")