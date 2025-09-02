//Immediately Invoked Function Expressions 

function yuv(){
     console.log("DB CONNECTED");
}                                 //normal func calling , can be polluted by global scope
yuv();                            // ispe ; lgaoge tbhi iife wala func error nhi dega 

// function yuv1(){
//     console.log("DB CONNECTED");
// }()                                    //creates problem

(function yuv2(){                       // yahi h IIFE  (name IIFE)
    console.log(`DB CONNECTED`);        //automatically invoked
})();                                 //doesnt create any problem only when u place ; 

//yuv2()      //call kre pade the lekin , jo just upar wala the func hai vo
               //()() is tarah se likha gya h , jiski zrurt nhi h
              // phla () DEFINITION  , ()dusra EXECUTION 

( ()=>{
    console.log("DB CONNECTED 2");       //unnamed IIFE
    
} )();

( (name)=>{
    console.log(`hello i m ${name}`);
    
} )("yuvraj");           //(isme gya )(isme se bheja )
