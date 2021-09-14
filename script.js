console.log('here there howdy ho');
var quote = 'our happiness sways on our capacity to believe in ourselves'
var dos = 'he never thought that all that it could have taken was ';
var toros = 'a simple first step...';
console.log(dos + toros);

// lessons from start of AC to advanced functions & objects

// ThriftyDetailedPrinter to be used in conjunction with JS 2.0

//CONDITIONALS

var playerPoints = 800;
var mood;
if (playerPoints === 0) {
  mood = 'straight bumsky';
} else if (playerPoints > 0 && playerPoints < 600) {
  mood = 'work hurder';
} else {
  mood = 'keep workin';
}
console.log(' ');
console.log('answer for the mood?!')
console.log(mood);

// LOOPERS

console.log(' ');
var count = 1;
while (count < 3) {
  count += 1;
}
console.log(count);

do {
  count += 1;
} while (count < 6);
console.log(count);

var sum = 0;
for (var i = 0; sum < 13; i++) {
  if (i%2 === 0) { //skipping even numbers
    continue;
  }
  sum += 1; 
}
console.log(sum);

//SWITCH

var weather = 'sunny';
var mood;
switch (weather) {
  case 'rainy':
    mood = 'lets do some reading';
    break;
  case 'windy':
    mood = 'lets get some sailing in';
    break;
  case 'sunny':
    mood = 'lets get some reading in on the sailboat';
    break;
}
console.log(' ');
console.log(mood);

// FUNCTIONS  

/*    far too repetitive with large # of products****

var printInventory = function (milk, eggs) {
  var milkString = String(milk);
  while (milkString.length < 3) {
    milkString = '0' + milkString;
  }
  console.log('Milk', milkString);
  var eggString = String(eggs);
  while (eggString.length < 3) {
    eggString = '0' + eggString;
  }
  console.log('Eggs', eggString);
}
printInventory(15, 10);

instead of one function that zero pads it all ->   */
console.log(' ');
var zeroPad = function (number, width) {
  var string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}
var printInventory = function (milk, eggs, flour) {
  console.log('milk', zeroPad(milk, 4));
  console.log('eggs', zeroPad(eggs, 4));
  console.log('flour', zeroPad(flour, 4));
}
console.log(printInventory(39, 120, 58));

// DATA & FUNCTIONS
//nested arrays
var arr = [['abc', '123'], ['xyz', '456']]
for (var i = 0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// array methods
var queue = ['Chaz Sr.', 'Em', 'Charl Jr.', 'Em'];
console.log(queue.push('Jack', 'Jared'));
queue.pop();
console.log(queue);
console.log(queue.unshift('Winnie', 'Wanda'));
console.log(queue.slice(2,4));

//removing a customer in the queue**
var removeCustomer = function (array, name) {
  var index = array.indexOf(name);
  if (index !== -1) {
    return array.slice(0, index).concat(array.slice(index + 1));
  }
  return array;
}

queue = removeCustomer(queue, 'Jane');
console.log(queue);
// -> ['Betty', 'Peter', 'Mary', 'David', 'Kate', 'Derek', 'Gary']

// using a loop to iterate over a string
var myString = 'The weather is nice';
for (var i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}
// -> T
// -> h
// ...
// -> c
// -> e

//slice substring and subst
var myString = 'The weather is nice';
console.log(myString.slice(5, 8));
// -> eat
console.log(myString.substring(5, 8));
// -> eat
console.log(myString.slice(16));
// -> ice
console.log(myString.substring(16));
// -> ice
console.log(myString.slice(-3));
// -> ice
console.log(myString.substring(-3));
// -> The weather is nice
console.log(myString.substr(5, 8));
// -> eather i
console.log(myString.substr(8, 5));
// -> her i
console.log(myString.substr(-3));
// -> ice

//OBJECTS
//convenient store example
var inventory = {
  Milk: 35,
  Eggs: 80,
  Flour: 15,
  'Chocolate Bar': 28,
  'Ice Cream': 10,
  Biscuits: 45,
  'Strawberry Jam': 8
}
for (var itemName in inventory) {
  console.log(zeroPad(inventory[itemName], 3), itemName);
}
// -> 035 Milk
// -> 080 Eggs
// -> 015 Flour
// -> 028 Chocolate Bar
// -> 010 Ice Cream
// -> 045 Biscuits
// -> 008 Strawberry Jam

//MUTABILITY
var obj1 = { num: 10 };
var obj2 = obj1;
var obj3 = { num: 10 };

console.log(obj1 == obj2);
// -> true
console.log(obj1 == obj3);
// -> false

//ADJUSTING POINT OF SALE SYSTEM
var inventory = {
  '1': {
    name: 'Milk',
    stock: 35,
    price: 2.99
  },
  '2': {
    name: 'Egg',
    stock: 80,
    price: 1.50
  },
  '3': {
    name: 'Flour',
    stock: 15,
    price: 3
  },
  '4':{
    name: 'Chocolate Bar',
    stock: 28,
    price: 1.2
  },
  '5':{
    name: 'Ice Cream',
    stock: 10,
    price: 2.5
  },
  '6':{
    name: 'Biscuit',
    stock: 45,
    price: 0.99
  },
  '7':{
    name: 'Strawberry Jam',
    stock: 8,
    price: 1.55
  }
}
//CREATING FUNCTION TO ADD ITEMS
var shoppingCart = {};
var addToShoppingCart = function (sku, qty) {
  if (sku in inventory) {
    if (sku in shoppingCart) {
      shoppingCart[sku] = shoppingCart[sku] + qty;
    } else {
      shoppingCart[sku] = qty;
    }
  } else {
    console.log('Item with sku', sku, 'does not exist in inventory.');
  }
};

//CREATING CHECKOUT / PRINTS ITMES/QUANTITIES/PRICE
var checkout = function (payment) {
  var total = 0;
  for (var sku in shoppingCart) {
    var subTotal = Math.round(inventory[sku].price * shoppingCart[sku] * 100) / 100;
    total += subTotal;
    inventory[sku].stock = inventory[sku].stock - shoppingCart[sku];
    // Update inventory stock level
    console.log(inventory[sku].name, 'x', shoppingCart[sku], '$', subTotal);
  }
  shoppingCart = {};
  // Set shopping cart to a new empty object

  total = Math.round(total * 100) / 100;
  console.log('Total: $', total);
}
addToShoppingCart('3', 1);
addToShoppingCart('2', 10);
addToShoppingCart('1', 1);
checkout();
// -> Flour x 1 $ 3
// -> Egg x 10 $ 15
// -> Milk x 1 $ 2.99
// -> Total: $ 20.99

//MODIFY INVENTORY AND PRINTINVENTORY FUNCTION
var printInventory = function () {
  for (var sku in inventory) {
    var item = inventory[sku];
    console.log(zeroPad(item.stock, 3), item.name);
  }
}
printInventory();
// -> 034 Milk
// -> 070 Egg
// -> 014 Flour
// -> 028 Chocolate Bar
// -> 010 Ice Cream
// -> 045 Biscuit
// -> 008 Strawberry Jam

//COMPLEX OBJECTS AND EDITING
var person = {
  first_name: 'John',
  last_name: 'Wayne',
  date_of_birth: '07-12-1981',
  family: ['Peter Wayne', 'Mary Wayne', 'Jane Lily'],
  friends: ['Maria Marquez', 'Tony Shark'],
  jobs: [
    {
      employer: 'Star Mart',
      position: 'cashier',
      start_date: '05-02-2009',
      end_date: '01-05-2010',
    },
    {
      employer: 'Juicy Bar',
      position: 'juice mixer',
      start_date: '11-04-2010',
      end_date: '22-03-2011',
    }
  ]
}
//NEW JOB
person.jobs.push({
  employer: 'The Corner Store',
  position: 'cashier',
  start_date: '11-04-2017',
  end_date: ''
});
//UPDATING END DATE OF JOB
person.jobs[2].end_date = '01-07-2017';
console.log(person.jobs[2]);
// -> {employer: 'The Corner Store', position: 'cashier', start_date: '11-04-2017', end_date: '01-07-2017'}
