let str = "Abhishek";

let len = str.length;
console.log(len);

console.log(str[0]);

// Template Literals
let specialString = `This is a template literal`;
console.log(specialString)

let obj = {
    item : "Pen",
    price : 15,
};
let outPut = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(outPut);

//Escape character (\n -> new line && \t -> tab)
console.log("Abhishek \n Pawar");
console.log("Abhishek\tPawar");

// String Methods -> Inmuatble
let s = "Abhishek Pawar  ";
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.trim());   // remove starting and ending spaces in string
console.log(s.slice(0,8)) // last index not include in slice method,it print from 0 to 7 charcter

let s1 = "Hasnabad";

console.log(s.concat(s1)); // other method is s+s1

console.log(s1.replace("a","A")); // it replace only once
console.log(s1.replaceAll("a","A")); // it remplace all value to find in string with new one

console.log(s.charAt(2));





const name = "Abhi";
const repoCount = 50;
console.log(name + repoCount + " Value");

console.log(`Hello my name ${name} and my repo count is ${repoCount}`);  // String Interpolation

const gameName = new String("aPawar");
console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('P'));

console.log(gameName.substring(0,5));

console.log(gameName.slice(1,5));

const newString = "  Abhi  ";
console.log(newString.trim());

const url = "https://google.com/app%20js";

console.log(url.replace('%20','-'));

console.log(url.includes('google'));

const myName = "abhi-pawar-hasnabad";
console.log(myName.split('-'));