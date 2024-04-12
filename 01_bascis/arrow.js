const user = {
    username: 'abhishek',
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`)
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)

// function one(){
//     let username = "abhi"
//     console.log(this.username) // output is undefined
// }
// one()


// const one = function(){
//     let username = "abhishek"
//     console.log(this.username) // output is undefined
// }

// const two = () => {
//     let userName = "ram"
//     console.log(this)
// }

// two()

// const sum = (num1,num2) => {
//     return num1+num2
// }
// console.log(sum(5,6))

//emplicit return, there is no need ot return keyword
// const sum1 = (num1, num2) => num1+num2
// console.log(sum1(1,6))

//There is no need the use return keyword when you use the parethesis
const sum1 = (num1, num2) => (num1+num2)
console.log(sum1(1,6))

// ({user:"abhi"}) this means return {user:"abhi"}
const name = (num1, num2) => ({user:"abhi"})
console.log(name(1,6))