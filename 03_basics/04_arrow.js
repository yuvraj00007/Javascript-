const chai = function () {
    let username = "hitesh"        //results as undefined
    console.log(this.username);   //yhn pe this kaam nhi krega kyunki function k andar h
}                                 //object hota to kr deta kaam

const chai2 = function () {
    let username = "hitesh"
    console.log(this);          //is trh k func k andar this use krne se pura ambaar khada ho jata h
}

const chai3=()=>{
    let username = "hitesh"
    console.log(this);
}

chai3()

const addTwo = (num1, num2) => {
    return num1 + num2           //explicit return 
}

console.log(addTwo(32,4))

const add2 = (num1, num2) =>  num1 + num2    //ek line me bhi kr skte hain known as implicit return

const retfunc =(num1,num2) => ({name : "yuvraj"})     //object aise ek line me return krna ho to bhi braces lgayenge