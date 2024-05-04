// // Object literal
// const user = {
//     name : "abhi",
//     loginCount : 8,
//     signIn : true,
//     getUserDetails : function() {
//         // console.log("Got the user details");
//         console.log(`UserName : ${this.name}`);
//         console.log(this);
//     } 
// }

// console.log(user.name);
// console.log(user.getUserDetails());


function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }

    return this;
}

// const userOne = User("ram", 12, true);
// const userTwo = User("ram", 12, true);
const userOne = new User("raj", 10, false);
const userTwo = new User("raj", 10, false);

console.log(userOne);
console.log(userTwo.constructor);