// Dates

let myDate = new Date() // -> object
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());

console.log(myDate.toISOString());
console.log(myDate.toJSON());

let myCreateDate = new Date(2023,0,23); // -> Mon Jan 23 2023
console.log(myCreateDate.toDateString());
console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);


console.log(Math.floor(Date.now()/1000)); // convert mileSecond to second


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1); // month start from 0 


newDate.toLocaleString('default',{
    weekday:"long",
})