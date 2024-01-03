const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString()) // -> num into string
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // -> 100.00
console.log(balance);


const num = 226.4845;
console.log(num.toPrecision(3)) // -> 226
console.log(num.toPrecision(5)); // -> 226.48

const otherNum = 10000000;
console.log(otherNum.toLocaleString('en-IN'));


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


//******************* Maths *************************/

console.log(Math);
console.log(Math.abs(-4));      // -> 4
console.log(Math.round(4.594)); // -> 5
console.log(Math.ceil(7.2));    // -> 8
console.log(Math.floor(3.9));   // -> 3
console.log(Math.sqrt(4));     // -> 2
console.log(Math.min(50,44,9,7,52,));
console.log(Math.max(1,4,5,4,7,9,45,120,65));

console.log(Math.random()); // This function return value between 0 to 1 
console.log(Math.random()*10 + 1); // This function return value between 1 to 10

console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1))+min);






