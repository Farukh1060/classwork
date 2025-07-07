// hoisting is javascript default behaviours
// of moving declaration to the top
// if
hello();  //call



//declare
function hello (){
    console,console.log("hello world");
}

// take all declaration to top

// var x;
// x= 7;
// console.log(x);


// x= 7;  //assign
// console.log(x);
// var x;// declare

// var keyword dafault assign 
//or inisilize varaible to "undefine"
// console.log(x);
// x= 7;  //assign
// var x;// declare


// x = 8;
// console.log(x);

let x;   //x is not initilised
//Initialization: Initializing a variable means
// assigning it an initial value at the time of its declaration.

// in strict mode,varaible cannot use before declaration
// var xy = 5
function fun(){
    var xy= 10 ;
    console.log(xy) 
    
}
fun()
console.log(xy) //xy is not define becaues funcinol scop