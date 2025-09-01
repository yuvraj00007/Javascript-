const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)   //not good , array k andar array

console.log(marvel_heros);
console.log(marvel_heros[3][1]);   //bad

const allHeros = marvel_heros.concat(dc_heros)   // concat ne kaam to kr diya lekin mushkil syntax aur naye array me krta h
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   //best , isko kehte h SPREAD krna

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //infinity k jgh space khud se mention bhi kr skte the 
console.log(real_another_array);    //1,2,3,4,5,6,7,8,9   is trh ayega



console.log(Array.isArray("Hitesh"))    //check if it is array
console.log(Array.from("Hitesh"))       //from , array bna dega 
console.log(Array.from({name: "hitesh"})) // interesting    khali [] de dega output me , directly convert nhi kr pa rha

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));