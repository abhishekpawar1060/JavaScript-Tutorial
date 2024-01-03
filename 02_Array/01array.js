let mark = [45,16,89,74,23,10,11,87];
console.log(mark);

let info = ["Abhi",21,"B+"];
console.log(info);
info[0] = "Ram";
console.log(info); // -> Array is Mutable and outPut is ["Ram",21,"B+"]


console.log(mark.length);
console.log(mark[0]);

mark[0] = 100;
console.log(mark); // -> Array is Mutable and outPut is [100, 16, 89, 74, 23, 10, 11, 87]

let myString = "Abhi";
myString[0] = "B";
console.log(myString); // -> String is Immutable and outPut is Abhi



// ****************** Loops *****************

//for-loop
for(let i = 0; i < mark.length; i++){
    console.log(mark[i]);
}

//for-of loop
let arrCity = ["Mumbai","Pune","Delhi","Hyderabad"];
for(let city of arrCity){
    console.log(city);
    //console.log(city.toUpperCase());
}

// calculate avg of marks
let total = 0;
let marksArray = [95,78,45,68,98,60,66,99];
for(let mark of marksArray){
    total += mark;
}

let avg = total / marksArray.length;
console.log("Avg : ", avg);

/* Q2. For given arry with prices of 5 items 
       All items have an offer of 10% OFF on them.
       Change the array to store final price after applying offer.
*/
let priceArray = [250,645,300,900,515];
for(let i = 0; i < priceArray.length; i++){
    let offer = priceArray[i] / 10;
    priceArray[i] = priceArray[i] - offer;
}

console.log(priceArray);


//************* Array Methods *************//

let itemsArray = ["Apple","Orange","Egg","Bread","Biscuts"];
console.log(itemsArray);

itemsArray.push("Tomato");
console.log(itemsArray);

itemsArray.push("Potato","Pen");
console.log(itemsArray);

console.log(itemsArray.pop());


console.log(itemsArray.toString());

console.log(mark.toString()); // -> convert array to string

console.log(mark.concat(itemsArray));

itemsArray.unshift("Notebook"); // add at first index
console.log(itemsArray);

console.log(itemsArray.shift()); // delete from first index & return

console.log(itemsArray.slice(0,3)); // -> return from startIdx to endIdx

let arr = [0,1,2,3,4,5,6,7];

arr.splice(0,2,10,11); // Output is [10, 11, 2, 3, 4,  5, 6, 7 ]
// here 2 is starting index and counter is 2 to repalce two element from the array and 10 & 11 is new element

console.log(arr); 











