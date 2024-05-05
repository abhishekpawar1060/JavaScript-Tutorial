function multiply(num){
    return num*5;
}

multiply.power = 2;

console.log(multiply(4));
console.log(multiply.power);
console.log(multiply.prototype);


function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++    
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const user1 = new createUser("ram",34);
const user2 = createUser("raj",24);

user1.printMe();