const marvelHeros = ["thor","IronMan","spiderman"];
const dcHeros = ["superman","flash","batman"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros); // Output is [ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvelHeros[3]); // output is [ 'superman', 'flash', 'batman' ]
// console.log(marvelHeros[3][2]); // output is batman

 const allHeros =  marvelHeros.concat(dcHeros);
 //console.log("allHeros : ",allHeros);

 const allNewHeros = [...marvelHeros,...allHeros];

 console.log(allNewHeros);

 const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_Array.flat(Infinity);
console.log(real_another_array);



console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
console.log(Array.from({name:"Abhishek"})); // It gives empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));