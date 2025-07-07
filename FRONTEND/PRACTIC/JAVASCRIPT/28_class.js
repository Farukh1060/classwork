<<<<<<< HEAD
//inline css

//style.csstext is use to give inline css and 
//it will replace previous style if + oppereter is not use

let elm = document.getElementById("btn")
// elm.style.cssText +="background-color:blue;"



//classname property of the element interface 
//get and set the value of the class attribbute of the specific element

//give space first for giving another class

// console.log(elm.className); //get classname
// elm.className += " btn";    //set class


//classlist property is read only property
//return dom tocken list (in array form)
// but can use the method as add, toggle or remove

// console.log(elm.classList)  //get classlist
// console.log(elm.classList.add("add"))         //add class
// console.log(elm.classList.remove("add"))      //remove class 
// console.log(elm.classList.toggle("add"))      // add if not,add remove if have (class)

//replace
//it will replace class with  new class
//return true if old class replace else return false

// console.log(elm.classList.replace("clsname" ,"add"))

//contains
//return boolin value
// console.log(elm.classList.contains("add"))

//weight and height of an element

// offsetWidth mesure in pixel include any boder , padding and vertical scroll bar
// offsetheight mesure in pixel include any boder , padding and horizantal scroll bar
let box = document.getElementById("button")
console.log(box.offsetWidth);
console.log(box.offsetHeight);


// clientWidth mesure in pixel include padding but exclude boder,margin and vertical scroll bar
// clientheight mesure in pixel include padding but exclude boder,margin and horizantal scroll bar
//inline element give zero value
console.log(box.clientWidth);
console.log(box.clientHeight);

let clint = document.getElementById("clint");
=======
//inline css

//style.csstext is use to give inline css and 
//it will replace previous style if + oppereter is not use

let elm = document.getElementById("btn")
// elm.style.cssText +="background-color:blue;"



//classname property of the element interface 
//get and set the value of the class attribbute of the specific element

//give space first for giving another class

// console.log(elm.className); //get classname
// elm.className += " btn";    //set class


//classlist property is read only property
//return dom tocken list (in array form)
// but can use the method as add, toggle or remove

// console.log(elm.classList)  //get classlist
// console.log(elm.classList.add("add"))         //add class
// console.log(elm.classList.remove("add"))      //remove class 
// console.log(elm.classList.toggle("add"))      // add if not,add remove if have (class)

//replace
//it will replace class with  new class
//return true if old class replace else return false

// console.log(elm.classList.replace("clsname" ,"add"))

//contains
//return boolin value
// console.log(elm.classList.contains("add"))

//weight and height of an element

// offsetWidth mesure in pixel include any boder , padding and vertical scroll bar
// offsetheight mesure in pixel include any boder , padding and horizantal scroll bar
let box = document.getElementById("button")
console.log(box.offsetWidth);
console.log(box.offsetHeight);


// clientWidth mesure in pixel include padding but exclude boder,margin and vertical scroll bar
// clientheight mesure in pixel include padding but exclude boder,margin and horizantal scroll bar
//inline element give zero value
console.log(box.clientWidth);
console.log(box.clientHeight);

let clint = document.getElementById("clint");
>>>>>>> origin/main
console.log(clint.clientWidth);