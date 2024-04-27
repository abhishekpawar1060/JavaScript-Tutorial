//generate a random color
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
let intervalId;

// startButton.addEventListener('click',function(e){
//     intervalId = setInterval(function(){
//         document.body.style.backgroundColor = randomColor();
//     },2000);
// },false);

// stopButton.addEventListener('click',function(e){
//     clearInterval(intervalId);
// },false);


//Clean Code
const startChangingColor = function(){
    if(!intervalId){  //intervalId == null
        intervalId = setInterval(changeBgColor,1000);
    }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

startButton.addEventListener('click',startChangingColor);
stopButton.addEventListener('click',stopChangingColor);