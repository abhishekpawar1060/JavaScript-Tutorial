// falsey values: false, 0, -0, BigInt 0n, "", null, undefind, NaN (other all are truthy values)


//truthy Values: "0", 'false', " ", [], {}, funtion(){},


const userEmail = "abhi@gamil.com";

if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email")
}

const useName = [];
if(useName.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length){
    console.log("Object is Empty")
}

//Nullish Coalesing Operator(??) : null undefind

let val1;
// val1 = 6 ?? 10;
val1 = null ?? 10;
val2 = undefined ?? 15;

console.log(val1)
console.log(val2)

val3 = null ?? 10 ?? 20;
console.log(val3);



//Terniary Operator

// condtion ? true : false
const tea = 10
tea >= 15 ? console.log("less than 15") : console.log("More tha n15");