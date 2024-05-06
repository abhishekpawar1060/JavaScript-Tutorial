class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const user1 = new Teacher("ram", "ram@gmail.com",1234);
user1.logMe()
user1.addCourse()

const user2 = new User("raj");
user1.logMe()

console.log(user1 instanceof Teacher); //true
console.log(user2 instanceof User);  //true