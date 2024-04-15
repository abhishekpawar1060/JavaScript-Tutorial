//if 
// <, >, <=, =>, ==, ===, !=, !==

// if(2 == "2"){ //true
//     console.log("Hello")
// }

// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`)
// }


const balance = 1000;
// if(balance > 500) console.log("test"),console.log("test2");

if(balance < 500){
    console.log("Less than 500");
}else if(balance < 700){
    console.log("Less than 700");
}else{
    console.log("Default");
}

const userLogged = true;
const debitCard = true;

const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if(userLogged && debitCard && 2 == 3){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}
