const user = {
  userName: 'Ankush Sharma',
  Email: 'Sharmaanku.ji@gmail.com',
  logInCount: 8,
  isSignedIn: true,

  getUserDetails: function () {
    console.log("Got User Details from The DataBase");
    console.log(`UserName: ${this.userName}`);
    console.log(this);
  },
}
console.log(user.userName);
console.log(user.logInCount);
console.log(user.getUserDetails());
console.log(this)