<<<<<<< HEAD
// object the object type represent one of the javascript data type it is used to
//store various keyed collection and more complex entities 
//javascript is template base not class base heAR WE DONT CREAT CLASS TO GET THE OBJECT BUT WE DIRECTLY CREAT OBJECT

 // THREE WAY TO CREAT OBJECT 
 //by object literial
 //by creating instance of object 
 // by using object constructor

 let person = {
    firstname:"abcd",
    lastname:"efgh",

   //  sayhello: function(){
   //    console.log("helo")
   //  }

   sayhello(){
     console.log("helo")
     
   },

   say(){
    console.log(this.sayhello() + " " + person2.sayworld());
    
   }

 };

  let person2 = {
    firstname :"xyz",
    sayworld(){
      console.log("world")
    }
  }
  
 person.age = 23;                              //to add or modify property
 

//  tow way to ascess property

// console.log(person.firstname);            //by dot

// console.log(person['lastname']);          // by squar or array notation

// console.log(person.firs);                //if there is no such property return undefine

// use in operate rto check
// wether the property is in the object or not give boolian value

// console.log('height' in person);  //false
// console.log('age' in person);  //true

//for in loop

// for(let xy in person){
//  console.log(xy +" " + person[xy]);             //dot notation will not work use array notion in loop
// }


//method

// person.sayhello = function(){
//    console.log("hello")
// }

// or

//  function say(){
//    console.log("hello")
// }

// person.sayhello=say;

// person.sayhello();
// person.sayhello();

//THIS
// IF WE WANT TO AXCESS THE  property or method of object itself use THIS

// person.say();

// math

// console.log(Math.PI);
// console.log(Math.E);

let x =2.4;

// console.log(Math.floor(x));             //give lower integer value
// co/nsole.log(Math.ceil(x));              //give higher integer value

// console.log(Math.round(x));             //give round of value
// console.log(Math.round(2.8)); 
// 
// console.log(Math.trunc(2.8));           //remove value after decimal

// console.log(Math.pow(2, 3)); 
// console.log(Math.cbrt(8)); 
// console.log(Math.sqrt(4)); 
// console.log(Math.min(8,8,5,6 ,9,-5)); 
// console.log(Math.max(8,8,5,6 ,9,-5)); 

// random number give value between 0 to 1 
// let num = Math.random();

//number in multiple of 10
//and remove decimal 

// let num = Math.trunc (Math.random() *10);     //value from 0 to 9

let num = Math.trunc (Math.random() *11);     //value from 0 to 10

// let num = Math.trunc (Math.random() *(25-15))+15;  //value 15 to24

// let num = Math.trunc (Math.random() *(25-15+1))+15;  //value 15 to25


=======
// object the object type represent one of the javascript data type it is used to
//store various keyed collection and more complex entities 
//javascript is template base not class base heAR WE DONT CREAT CLASS TO GET THE OBJECT BUT WE DIRECTLY CREAT OBJECT

 // THREE WAY TO CREAT OBJECT 
 //by object literial
 //by creating instance of object 
 // by using object constructor

 let person = {
    firstname:"abcd",
    lastname:"efgh",

   //  sayhello: function(){
   //    console.log("helo")
   //  }

   sayhello(){
     console.log("helo")
     
   },

   say(){
    console.log(this.sayhello() + " " + person2.sayworld());
    
   }

 };

  let person2 = {
    firstname :"xyz",
    sayworld(){
      console.log("world")
    }
  }
  
 person.age = 23;                              //to add or modify property
 

//  tow way to ascess property

// console.log(person.firstname);            //by dot

// console.log(person['lastname']);          // by squar or array notation

// console.log(person.firs);                //if there is no such property return undefine

// use in operate rto check
// wether the property is in the object or not give boolian value

// console.log('height' in person);  //false
// console.log('age' in person);  //true

//for in loop

// for(let xy in person){
//  console.log(xy +" " + person[xy]);             //dot notation will not work use array notion in loop
// }


//method

// person.sayhello = function(){
//    console.log("hello")
// }

// or

//  function say(){
//    console.log("hello")
// }

// person.sayhello=say;

// person.sayhello();
// person.sayhello();

//THIS
// IF WE WANT TO AXCESS THE  property or method of object itself use THIS

// person.say();

// math

// console.log(Math.PI);
// console.log(Math.E);

let x =2.4;

// console.log(Math.floor(x));             //give lower integer value
// co/nsole.log(Math.ceil(x));              //give higher integer value

// console.log(Math.round(x));             //give round of value
// console.log(Math.round(2.8)); 
// 
// console.log(Math.trunc(2.8));           //remove value after decimal

// console.log(Math.pow(2, 3)); 
// console.log(Math.cbrt(8)); 
// console.log(Math.sqrt(4)); 
// console.log(Math.min(8,8,5,6 ,9,-5)); 
// console.log(Math.max(8,8,5,6 ,9,-5)); 

// random number give value between 0 to 1 
// let num = Math.random();

//number in multiple of 10
//and remove decimal 

// let num = Math.trunc (Math.random() *10);     //value from 0 to 9

let num = Math.trunc (Math.random() *11);     //value from 0 to 10

// let num = Math.trunc (Math.random() *(25-15))+15;  //value 15 to24

// let num = Math.trunc (Math.random() *(25-15+1))+15;  //value 15 to25


>>>>>>> origin/main
console.log(num)