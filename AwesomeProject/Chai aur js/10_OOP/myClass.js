class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptedpassword(){
    return `${this.password}abc`
  }

  changeusername(){
    return `${this.username.toUpperCase()}`
  }
}

const chai = new User('Ankush sharma','Sharma@123.com','123');

console.log(chai);
console.log(chai.changeusername());
console.log(chai.encryptedpassword());
