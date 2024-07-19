class User{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`${this.username} just Logged in`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addmeCourse(){
        console.log(`${this.username} was added in the new course`)
    }
}

const chai = new Teacher('Ankush','Sharmaanku.ji@gmail.com',"123");
chai.logme();
console.log(chai)