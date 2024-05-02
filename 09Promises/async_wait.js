// async function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(200)
//         },2000)
//     })
// }

// async function getWeatherData(){
//     await api(); //1st call
//     await api(); //2nd call
// }

// getWeatherData()


function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(dataId);
            resolve("success")
        },2000)
    });
}

// async function fetchData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }
// fetchData()

(async function(){ //IIFE => Immeditely Invoked Function Expression
    await getData(1)
    await getData(2)
    await getData(3)
})();


