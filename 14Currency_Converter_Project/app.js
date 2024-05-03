// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";
const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("#btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

window.addEventListener("load",() => {
    updateExchangeRate();
})


for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerHTML = currCode;
        newOption.value = currCode;
        if(select.value === "from" && currCode == "USD"){
            newOption.selected = "selected"
        }
        else if(select.value === "to" && currCode == "INR"){
            newOption.selected = "selected"
        }
        select.append(newOption);
    }

    select.addEventListener('change',(e) => {
        updateFlag(e.target);
    })
}

const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    updateExchangeRate();
})



updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtValue = amount.value;
    if(amtValue == "" || amtValue < 1){
        amtValue = 1;
        amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
    let rate = data[toCurr.value.toLowerCase()]
    let finalAmount = amtValue * rate;

    msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
    
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    updateExchangeRate();
})