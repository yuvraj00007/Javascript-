const score = 400
// console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1))  // bata rha h ki sirf 1 value cahiye point k bad 

console.log(Math.ceil(4.2));    //lower val
console.log(Math.floor(4.9));   //higher val

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);    //floor lgane se decimal hat gya aur +1 krne se 1 se 10 k beech me koi randome value generate hogi

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)   //random number mil rha lekin min yani 10 se bada