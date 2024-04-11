// let a = 10

// if(true){
//     const b = 20
//     console.log("Inner:",a)
// }

// console.log(a)
// console.log(b)

function one(){
    const userName = "abhi"

    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)
    two()
    
}

one()


//*************************** */
addOne(5)
function addOne(value){
    return value+1
}


addTwo(5)
const addTwo = function(value){  //Give the error the hoisting
    return value+2
}
