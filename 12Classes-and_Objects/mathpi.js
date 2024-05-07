// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor);

const product = {
    name : "dress",
    price: 2500,
    isAvailble: true,
    orderProduct: function(){
        console.log("Order any thing");
    }
}

console.log(Object.getOwnPropertyDescriptor(product, 'name'));

Object.defineProperty(product,'name',{
    writable:false,
    enumerable: false  //loop
})

console.log(Object.getOwnPropertyDescriptor(product, 'name'));

for (const [key,value] of Object.entries(product)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}