<<<<<<< HEAD
//global variable is a variable declared in globle scop,or
// a variable that is visible from all other scope
//it can axcess anywhere in program
//can not declare again

//local varaible is avalable to only that scope
//it can axcess only in scope
// same locle var can use in different scope

let globle = 10;

function fun(){
    let local =5 ;
    console.log(local);  //hear both avalible
    console.log(globle);
}
//console.log(local); // hear local is not avalible
fun();
=======
//global variable is a variable declared in globle scop,or
// a variable that is visible from all other scope
//it can axcess anywhere in program
//can not declare again

//local varaible is avalable to only that scope
//it can axcess only in scope
// same locle var can use in different scope

let globle = 10;

function fun(){
    let local =5 ;
    console.log(local);  //hear both avalible
    console.log(globle);
}
//console.log(local); // hear local is not avalible
fun();
>>>>>>> origin/main
console.log(globle);  //hear globle avalible