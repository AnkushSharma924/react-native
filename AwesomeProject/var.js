// Primitive

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt;

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 3455677899004445n;

// Refrence (Non primitive)

// Array, Objects, Functions

const heros = ['shaktiman', 'naagraj', 'doga'];

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive),  Heap(Non-Primitive)

let myYoutubename = 'hiteshchoudharydotcom';

let anotherName = myYoutubename;
anotherName = 'ChaiaurCode';

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
  Name: 'Ankush Sharma',
  Email: 'Sharmaanku.ji@gmail.com',
};

let userTwo = userOne;
console.log(userTwo);
userTwo.Email = 'Asharma.Developer4@gmail.com';

console.log(userOne.Email);
console.log(userTwo.Email);
