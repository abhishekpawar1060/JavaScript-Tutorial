// const myArr = [];
// %DebugPrint(myArr)

//Types of array
// 1. Continious
// 2. Holey

/*
SMI (Small Integer)
Packed element
Double(float, string, function)
*/

const arr1 = [1,2,3,4,5] // Packed_SMI_ELEMENTS(Continues array)
// const arr2 = [1,2,,4,5] // Pa_SMI_ELEMENTS(Holey Array)               


arr1.push(6.0) //Packed_DOUBLE_ELEMENT

arr1.push("7") //Packed_ELEMENT

arr1[10] = 11 //HOLEY_ELEMENTS

// console.log(arr1);
// console.log(arr1.length);
// console.log(arr1[9]);

//bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)


//holes are very exepensive in js


const arr3 = [1,2,3,4,5]
console.log(arr3[2]);

// SMI > DOUBLE > PACKED         ***OPTIMIZIED***
// H_SMI > H_DOUBLE > H_PACKED


const arr4 = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENT
arr4[0] = "1" //HOLEY_ELEMENT
arr4[1] = "2" //HOLEY_ELEMENT
arr4[2] = "3" //HOLEY_ELEMENT


//Optimized
const arr5 = []       
arr5.push("1")  //PACKED_ELEMENTS
arr5.push("2")  //PACKED_ELEMENTS
arr5.push("3")  //PACKED_ELEMENTS


const arr6 = [1,2,3,4,5]
arr6.push(Infinity)  //DOUBLE