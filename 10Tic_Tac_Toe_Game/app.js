let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg')
let turnO = true;     //true = playerX, false = playerO

const winsPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnO){
            box.innerText = 'O';
            box.style.color = "red"
            turnO = false;
        }else{
            box.innerText = 'X';
            box.style.color = "green"
            turnO = true;
        }
        box.disabled = true;

        checkWinner()
    });
});


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove('hide')
    disableBoxes()
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
}

checkWinner = () => {
    for(let pattern of winsPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }

    }
};



newGameBtn.addEventListener('click', resetGame); 
resetButton.addEventListener('click', resetGame);


