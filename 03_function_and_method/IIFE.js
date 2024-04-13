//Immediately Invoked Function Expressions
(function one(){
    console.log(`DB CONNECTED`)
})();


( (name) => {
    console.log(`Two Function ${name}`)
})("abhi");

