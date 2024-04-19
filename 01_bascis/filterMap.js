const coding = ['js', 'java', 'Go', 'ruby']

// const value = coding.forEach((item) => {
//     console.log(item)
//     return item   //undefined
// })

// console.log(value)

// const myNum = [1,3,4,6,8,0]

// let newNum = myNum.filter((num) => {
//     return num > 4
// })

// console.log(newNum)


// const newNums = []
// myNum.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })

let Books = [
    {title: "Book1", genre: "History", publish: 1932, edition: 2021},
    {title: "Book2", genre: "Science", publish: 1945, edition: 2020},
    {title: "Book3", genre: "Non-Fiction", publish: 1902, edition: 2021},
    {title: "Book4", genre: "Self-Improvemnt", publish: 1989, edition: 2002},
    {title: "Book5", genre: "History", publish: 1992, edition: 2019},
    {title: "Book6", genre: "Science", publish: 2009, edition: 2015},
]

let userBook = Books.filter((bk) => {
    return bk.genre === "History"
}) 

userBook = Books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === "History"
})


// console.log(userBook)


const myNum = [1,2,3,4,5,6,7,8]
//  const newNum = myNum.map ((num) => num+10)

// console.log(newNum)

const newNums = myNum
                .map((num) => num*10 )  
                .map((num) => num+1)
                .filter((num) => num > 50)

// console.log(newNums)



const arr = [1,2,3]
// const myTotal = arr.reduce(function(acc, currVal) {
//     console.log(`acc:${acc} and ${currVal}`)
//     return acc+currVal
// }, 0)

const myTotal = arr.reduce((acc, currVal) => acc+currVal, 0)
// console.log(myTotal)

const shoppingCart = [
    {itemName: 'py course',price: 599},
    {itemName: 'React',price: 5999},
    {itemName: 'java',price: 699},
    {itemName: 'Js',price: 599},
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)