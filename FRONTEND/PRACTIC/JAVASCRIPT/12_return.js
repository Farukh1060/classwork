<<<<<<< HEAD
//the return statement ends function execution and 
//specifies a value to be returned to the function caller
// if we ommit return ,function will return undefine
//when we dont want function to print and want to save value (in var) to use it later  

// function myfun(a , b){
//     return ( a + b) ;
// }


// let x = myfun(5,6);

// console.log(x);

//we can right multiple return statement on given condition or in different block of a function 
// but can not use in same block (only firsr return will work after that function end)

function myfun(a , b){
    if(a>b){
        return ( a - b) ;
    }
   else{
    return (a+b);
   }
}


let x = myfun(8,6);

=======
//the return statement ends function execution and 
//specifies a value to be returned to the function caller
// if we ommit return ,function will return undefine
//when we dont want function to print and want to save value (in var) to use it later  

// function myfun(a , b){
//     return ( a + b) ;
// }


// let x = myfun(5,6);

// console.log(x);

//we can right multiple return statement on given condition or in different block of a function 
// but can not use in same block (only firsr return will work after that function end)

function myfun(a , b){
    if(a>b){
        return ( a - b) ;
    }
   else{
    return (a+b);
   }
}


let x = myfun(8,6);

>>>>>>> origin/main
console.log(x);