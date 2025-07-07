<<<<<<< HEAD
//anonymous function is a function without a function name

// immediatly invoked function expression is a function that is call directily
//after the function is loded into the browser.
// the way identify IIFE is extra left and right parenthesis 

// let anony = function () {
//     console.log("hello world")
// }
// anony();



//set time out
//use of anonymous
// setTimeout(
//     function () {
//     console.log("hello world")
// },3000);

//immediatly invoked function
let x =  "world"; //globle
(function () {
    let x = "hello"; //local
    console.log(x)
=======
//anonymous function is a function without a function name

// immediatly invoked function expression is a function that is call directily
//after the function is loded into the browser.
// the way identify IIFE is extra left and right parenthesis 

// let anony = function () {
//     console.log("hello world")
// }
// anony();



//set time out
//use of anonymous
// setTimeout(
//     function () {
//     console.log("hello world")
// },3000);

//immediatly invoked function
let x =  "world"; //globle
(function () {
    let x = "hello"; //local
    console.log(x)
>>>>>>> origin/main
})();