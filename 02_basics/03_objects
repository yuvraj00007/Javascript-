// singleton
// Object.create

// object literals:-

const mySym = Symbol("key1")     //symbol bhi ek datatype h


const JsUser = {       
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",            //symbol ka ab typeOf kroge to symbol ayega lekin [ ] na lgate to string ban jata
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}                     //JsUser , yhi to ek object tha pura

console.log(JsUser["email"])
console.log(JsUser.email)     // . lga k object access to kr skte hain lekin agr 'full name' jaisa variable ho to nhi , beech me space h na
console.log(JsUser["full name"])        //isiliye ye wala syntax [ ]
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
//  Object.freeze(JsUser)                     //aB agr koi badlega email to change nhi hoga , error nhi ayega lekin bs change nhi hoga
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);
console.log(JsUser["email"]);

JsUser.greeting = function(){     //function bna rhe h
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());   //agr sirf JsUser.greeting likh dete bina () k to [Function (anonymous)] a jata
console.log(JsUser.greetingTwo());