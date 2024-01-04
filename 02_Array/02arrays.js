const myArray = [0,1,2,3,4,5];

const myArr2 = new Array(1,2,3,4);

myArray.push(6);
myArray.push(7);
console.log(myArray);

console.log(myArray.pop());

myArray.unshift(9);
console.log(myArray);

console.log(myArray.shift());

console.log(myArray.includes(2));
console.log(myArr2.indexOf(1));


const newArr = myArray.join();
console.log(newArr);

// Slice & Splice

console.log(myArr2.slice(0,2));

console.log(myArr2.splice(0,2,45,34)); // Splice function manipulate the original array

console.log(myArr2);