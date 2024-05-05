// let myName = "abhi  ";
// let userName = "abhi@1060   "

// console.log(myName.trueLength());


let myHero = ["thor", "ironMan", "spiderman"]

let heroPower = {
    thor : 'hammer',
    ironMan : "suit",
    spiderman : "sling",
    getSpiderPower: function(){
        console.log(`Spidy power id ${this.spiderman}`);
    }

}

Object.prototype.abhi = function(){
    console.log(`Abhi is present in all object`);
}

Array.prototype.heyAbhi = function(){
    console.log("Abhi say hello");
}


// heroPower.abhi()
myHero.abhi()
myHero.heyAbhi()
// heroPower.heyAbhi()


//Inheritance

const User = {
    username : "Abhi"
}
const Teacher = {
    makeVideo : true
}

const TechingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : "Js assignment",
    fullTime : true,
    __proto__:TechingSupport
}

Teacher.__proto__ = User

// Modern Syntax
Object.setPrototypeOf(TechingSupport, Teacher)

console.log(Teacher.username);


let anotherUser = "Abhishek         "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUser.trueLength()

"Ram   ".trueLength()
