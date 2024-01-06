// Singleton -> 
//Object.create

// object literals

// Symbol Declaration
const mySymbol = Symbol("key1")

const JsUser = {
    name : "Abhishek",
    "fullName" : "Abhishek Pawar",
    [mySymbol] : "myKey1",         // -> Symbol declaration in object literals
    age : 25,
    location : "Mumbai",
    email : "abhishek@gamil.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

console.log(JsUser.name);
console.log(JsUser["email"]);

console.log(JsUser["fullName"]);

console.log(typeof JsUser[mySymbol]);

JsUser.email = "abhi@gmail.com";
console.log(JsUser.email);

//Object.freeze(JsUser); // This freeze function freeze the object to not change any object value
JsUser.email = "abhi45@google.com";
console.log(JsUser);



JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());




JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}
console.log(JsUser.greetingTwo());
