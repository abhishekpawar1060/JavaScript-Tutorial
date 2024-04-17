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

let score = 10;
do{
    console.log(`Score is ${score}`)
    score++
}while(score <= 10);