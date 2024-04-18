//for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number")
//     }
//     console.log(element)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(`Inner loop value: ${j} and outer loop value ${i}`)        
//     }
//     const element = i;
    
// }

// let array = ['flash','batman', 'iron_man']
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element)
    
// }


// break and continue
// for (let i = 0; i < 10; i++) {
//     if(i == 5){
//         console.log(i);
//         break
//     }
//     if(i == 3){
//         continue;
//     }

//     console.log(i)
// }


// let index = 0;
// while(index <= 5){
//     console.log(index)
//     index++
// }

// let array = [1,2,3,5,3,2,1]
// let i = 0
// while(i < array.length){
//     console.log(array[i]);
//     i++;
// }

// let score = 10;
// do{
//     console.log(`Score is ${score}`)
//     score++
// }while(score <= 10);


//for of loop
// const arr = [1,2,3,4,5,6]
// for (const it of arr) {
//     console.log(it)
// }

// let str = "Hello world"
// for (const it of str) {
//     console.log(it)
// }

const map = new Map()
map.set("IN","India")
map.set("US","United State")
map.set("UK", "United Kingdom")

// console.log(map)
// for(let [key, value] of map){
//     console.log(key, ':' ,value)
// }


// const Myobj = {
//     game1:'NFS',
//     game2:'spiderman'
// }
// for(let key in Myobj){
//     console.log(`${key} shortcut for  ${Myobj[key]}`)
// }


// const programming = ["js", "java", "go", 'cpp']
// for (const i in programming) {
//     console.log(programming[i])
// }



//for Each loop

const coding = ["js", "rust", "java", "go"]

// coding.forEach( function (val) {
//     console.log(val)
// })

// coding.forEach(element => {
//     console.log(element)
// });


// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => { 
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        langName:'javascript',
        langFileName:'js'
    },
    {
        langName:'java',
        langFileName:'java'
    },
    {
        langName:'python',
        langFileName:'py'
    },
]

myCoding.forEach( (item) => {
    console.log(item.langName)
})