function SetUserName(userName) {
  this.userName = userName;
  console.log(userName);
}

function createUser(userName, Email, Password) {
  SetUserName.call(this, userName);
  this.Email = Email;
  this.Password = Password;
}

const user = new createUser('ANkush Sharma', 'Sharma@123.com', '123');
console.log(user);
