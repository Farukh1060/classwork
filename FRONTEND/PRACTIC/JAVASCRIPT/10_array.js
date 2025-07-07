<<<<<<< HEAD


//AN ARRAY is a collection of similar type of data elements stored at contiguous memory location 
//.it is the simplest
// data structure and can accessed directly by only using index number
// array can hold object ,function and array in array 
// array index(0,1,2,3,...) is also called keys
// and array [keys ,value ] pair is called entries

let fruits = ["apple","banana","mango","grapes"];
let car = ["swift","volvo","bmw","tata"];
// fruits[0] ="pine"                                   //axcess and change array value
// console.log(fruits[0]);
fruits.push("watermellon");                           //to add string at the end of array
// fruits.pop();                                     //to remove string at the end of array

//fruits.unshift("kivi");                             //to add string at the start of array
//fruits.shift();                                    //to remove string at the start of array

// fruits.splice(1,2)                                 // to remove string at the middle of array

// fruits.splice(2,0,"newvalue");                          // in splice 2 is poistion to add new value
                                                      // 0 is value to remove after position 2
                                                      //"newvalue" will add at that position 

// let position = fruits.indexOf("watermellon");     // give array index_no. of string
// console.log(position);

// console.log(fruits.includes("mang"));            //serch string in array and give boolian value

// console.log(fruits.join("_"));                      // join array with given value

//let a = "this is array";                            // split a string into array 
//console.log(a.split(' '));   

//array.concate(a,b)

// document.getElementById("para").innerHTML = fruits;


// for forEach loop               // for reach method call fuction for each element in an array
                                //    will not exectuted for empty element

// fruits.forEach(k => {
//     console.log(k)
// });

// fruits.forEach(fun);

// function fun (value){
//     console.log(value);
// }



// forof loop
//it loop through the iterable object
//for every iteration the value of the next property is assigned to the variable 

// for (const iterator of fruits) {
//     console.log(iterator);
// }

// for(let i =0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// spread array with ... (three dot) and array name

// let mix = [...car,...fruits];
// console.log(mix);

// with

let arr = ["january","febuary","mar", "april"];
// let newarray1 = arr.with(2, "march");
// console.log(newarray1);
// document.getElementById("para").innerHTML =newarray1;

//keys
// let keys = arr.keys();
// for (const x of keys) {
//     document.getElementById("para").innerHTML += x;
// }

// entites

// let y =arr.entries()

// for (const x of y ){
//     document.getElementById("para").innerHTML += x+"<br>";
// }





// multidimension array

let fru_cont = [
    ["apple",100],
    ["banana",50],
    ["mango",100],
    ["grapes",250]
    
]

let get = fru_cont[0][1];

// console.log(get);

=======


//AN ARRAY is a collection of similar type of data elements stored at contiguous memory location 
//.it is the simplest
// data structure and can accessed directly by only using index number
// array can hold object ,function and array in array 
// array index(0,1,2,3,...) is also called keys
// and array [keys ,value ] pair is called entries

let fruits = ["apple","banana","mango","grapes"];
let car = ["swift","volvo","bmw","tata"];
// fruits[0] ="pine"                                   //axcess and change array value
// console.log(fruits[0]);
fruits.push("watermellon");                           //to add string at the end of array
// fruits.pop();                                     //to remove string at the end of array

//fruits.unshift("kivi");                             //to add string at the start of array
//fruits.shift();                                    //to remove string at the start of array

// fruits.splice(1,2)                                 // to remove string at the middle of array

// fruits.splice(2,0,"newvalue");                          // in splice 2 is poistion to add new value
                                                      // 0 is value to remove after position 2
                                                      //"newvalue" will add at that position 

// let position = fruits.indexOf("watermellon");     // give array index_no. of string
// console.log(position);

// console.log(fruits.includes("mang"));            //serch string in array and give boolian value

// console.log(fruits.join("_"));                      // join array with given value

//let a = "this is array";                            // split a string into array 
//console.log(a.split(' '));   

//array.concate(a,b)

// document.getElementById("para").innerHTML = fruits;


// for forEach loop               // for reach method call fuction for each element in an array
                                //    will not exectuted for empty element

// fruits.forEach(k => {
//     console.log(k)
// });

// fruits.forEach(fun);

// function fun (value){
//     console.log(value);
// }



// forof loop
//it loop through the iterable object
//for every iteration the value of the next property is assigned to the variable 

// for (const iterator of fruits) {
//     console.log(iterator);
// }

// for(let i =0; i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// spread array with ... (three dot) and array name

// let mix = [...car,...fruits];
// console.log(mix);

// with

let arr = ["january","febuary","mar", "april"];
// let newarray1 = arr.with(2, "march");
// console.log(newarray1);
// document.getElementById("para").innerHTML =newarray1;

//keys
// let keys = arr.keys();
// for (const x of keys) {
//     document.getElementById("para").innerHTML += x;
// }

// entites

// let y =arr.entries()

// for (const x of y ){
//     document.getElementById("para").innerHTML += x+"<br>";
// }





// multidimension array

let fru_cont = [
    ["apple",100],
    ["banana",50],
    ["mango",100],
    ["grapes",250]
    
]

let get = fru_cont[0][1];

// console.log(get);

>>>>>>> origin/main
