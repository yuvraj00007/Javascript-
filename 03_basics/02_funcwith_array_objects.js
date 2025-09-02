function calculateCartPrice(...num1){         //isse hi ... spread operator kehte the aur isse hi rest operator keh rhe
    return num1                             //yhan pe As a rest operator kaam krega, aur aap cart me chahe jo cheeze add kro
}                                           //ye add kr dega kyunki hme to pta nhi tha kitni cheeze add hongi cart me
                                            //yani hme ye nhi pta tha ki kitne parameters pass kre
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){      //anyobject koi variable wgaira nhi h , ye access deta h , yhan pr user hi ko anyobject bna diya h
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));