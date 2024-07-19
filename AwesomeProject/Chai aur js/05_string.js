const name = 'hitesh';
const repoCount = 50;

//console.log(name + repoCount + 'Value');

console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ankush');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4);

console.log(newString);

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);
const newStringOne = '       Ankush      ';
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://Ankush.com/ankush%20Sharma';
console.log(url.replace('%20', '__'));