const Url = 'https://cat-fact.herokuapp.com/facts';

// let promise = fetch(Url)
// console.log(promise);

// const getFacts = async () => {
//     let response = await fetch(Url);
//     console.log(response); //JSON format

//     let data = await response.json();
//     console.log(data);
// }
// getFacts()


function getFacts(){
    fetch(Url).then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
}

getFacts()