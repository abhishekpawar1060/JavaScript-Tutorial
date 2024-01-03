// 1. Primitive
//  7 types  : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // Number
const scoreValue = 12.35 // => number

const isLoggedIn = false
const outsideTemp = null // => Object(type)
let userEmail;

const id = Symbol('123')  // dataType => Symbol
const anthorId = Symbol('123')
console.log(id === anthorId)  // => false


const bigNumber = 64684989797946132n // => BigInt(type)



// 2. Reference (Non primitive)
// Array, Obkect, Functions

const heros = ["iron man", "thor", "captain america"] // dataType => Object

let myObj = {  // dataType => Object
    name:"abhishek",
    age: 22,
}

const myFunction = function(){ // dataType => function
    console.log("Hello world");
}

console.log(typeof bigNumber)
console.log(typeof scoreValue)
console.log(typeof id)
console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)





// ****************** Memory **********************
/*

1. Stack(primitive) , 
2. Heap(Non-Primitive)

*/