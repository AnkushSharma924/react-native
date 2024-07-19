// let myName = "hitesh     ";
// let myChannel = "chai     ";

// console.log(myName.length)

let myHeros = ['thor', 'spiderman'];

let heroPower = {
  thor: 'Hammer',
  spiderman: 'slinger',

  getSpiderPower: function () {
    console.log(`Power of spiderman is ${this.spiderman}`);
  },
};

//heroPower.getSpiderPower();

Object.prototype.Ankush = function(){
    console.log(`Ankush is present in all the Objects`)
}

Array.prototype.heyAnkush = function(){
    console.log(`Ankush Said Hey`);
}

// heroPower.Ankush();
// myHeros.Ankush();
// myHeros.heyAnkush();
// heroPower.heyAnkush();

let anotherName ="AnkushSharma      "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True Length is ${this.trim().length}`)
}

anotherName.trueLength();
"Dipesh".trueLength();
