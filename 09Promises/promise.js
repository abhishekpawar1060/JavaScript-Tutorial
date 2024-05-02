// const getPromise = new Promise((resolve, reject) => {
//     let error = true;
//     if(!error){
//         console.log("Hello");
//         resolve("Success");
//     }else{
//         reject("error")
//     }    
// })

// getPromise.then(() => {
//     console.log("promise fulfilled");
// }).catch((err) => {
//     console.log("Error",err);
// });

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 1");
            resolve("Success")
        },3000)
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 2");
            resolve("Success")
        },3000)
    });
}


// let p1 = asyncFunc1();
// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//     console.log(res);
//     console.log("fetching data2....");
//     asyncFunc2().then((res) => {
//         console.log(res);
//     });
// }).catch((err) => {
//     console.log(err);
// });


// let p2 = asyncFunc2();
// console.log("fetching data2...");
// p1.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success")
        },2000);
    });
}


getData(1).then((res) => {
    return getData(2)
})
.then((res) => {
    return getData(3)
}).then((res) => {
    console.log(res);
})