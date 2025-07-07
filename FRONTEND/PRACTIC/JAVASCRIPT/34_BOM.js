<<<<<<< HEAD
//BOM browser object model is used to intrect with the browser
//creat automatcily
//all globle varaible and function created withe var keyword
//automaticly become member of the windo object
//grobl varaible = prperty
// globle function = method 

//windo height and width
console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.outerHeight);
console.log(window.outerWidth);

//new windo opem
let btn4 = document.getElementById("btn4");


let url1 = "../CSS/animation.html";
let url2 = "../CSS/transform.html"
nam = "animatio";
features ="height = 400,width = 500"
let x;
let ele = document.getElementById("btn2")
ele.addEventListener("click",function(){
   x =  window.open(url1,nam,features)
})

let ele1 = document.getElementById("btn3")
ele1.addEventListener("click",function(){
    window.open(url2,nam,features)
})

btn4.addEventListener("click",function(){
    x.close();
=======
//BOM browser object model is used to intrect with the browser
//creat automatcily
//all globle varaible and function created withe var keyword
//automaticly become member of the windo object
//grobl varaible = prperty
// globle function = method 

//windo height and width
console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.outerHeight);
console.log(window.outerWidth);

//new windo opem
let btn4 = document.getElementById("btn4");


let url1 = "../CSS/animation.html";
let url2 = "../CSS/transform.html"
nam = "animatio";
features ="height = 400,width = 500"
let x;
let ele = document.getElementById("btn2")
ele.addEventListener("click",function(){
   x =  window.open(url1,nam,features)
})

let ele1 = document.getElementById("btn3")
ele1.addEventListener("click",function(){
    window.open(url2,nam,features)
})

btn4.addEventListener("click",function(){
    x.close();
>>>>>>> origin/main
})