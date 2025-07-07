<<<<<<< HEAD
//event bubling in this model an event atart at the most
// specific element and then flow upward towardthe least specific element

//when u click the button
// first button will clickthen  div, body,html,document


// in eventcapturing reverse will happen


// when we have structure like this body>div>button 
//and we have click event on all of this 


// //body click
// document.body.addEventListener("click",function(){
//     console.log("body click")
// })

// //div click
// let div = document.getElementById("parent");

// div.addEventListener("click",function(){
//     console.log("div click")
// })

// //button click
// let btn = document.getElementById("btn");
// btn.addEventListener("click",function(){
//     console.log("button click")
// })

// by default event is bubbling first child will execute and then parent


// if we use third parameter true in addeventlistiner it will becoum event capturing
//first parant will execute and thin child
//and by altering the true vale we will get different result
// //body click
// document.body.addEventListener("click",function(e){
//     console.log("body click")
//     e.stopPropagation();
// },true)

// //div click
// let div = document.getElementById("parent");

// div.addEventListener("click",function(){
//     console.log("div click")
// },true)

// //button click
// let btn = document.getElementById("btn");
// btn.addEventListener("click",function(e){
//     console.log("button click")
//     e.stopPropagation();
// },true)

// for only one to work from all use stop propgration

//body click
document.body.addEventListener("click",function(){
    console.log("body click")
    
})

//div click
let div = document.getElementById("parent");

div.addEventListener("click",function(){
    console.log("div click")
})

//button click
let btn = document.getElementById("btn");
btn.addEventListener("click",function(e){
    console.log("button click")
    e.stopPropagation();
=======
//event bubling in this model an event atart at the most
// specific element and then flow upward towardthe least specific element

//when u click the button
// first button will clickthen  div, body,html,document


// in eventcapturing reverse will happen


// when we have structure like this body>div>button 
//and we have click event on all of this 


// //body click
// document.body.addEventListener("click",function(){
//     console.log("body click")
// })

// //div click
// let div = document.getElementById("parent");

// div.addEventListener("click",function(){
//     console.log("div click")
// })

// //button click
// let btn = document.getElementById("btn");
// btn.addEventListener("click",function(){
//     console.log("button click")
// })

// by default event is bubbling first child will execute and then parent


// if we use third parameter true in addeventlistiner it will becoum event capturing
//first parant will execute and thin child
//and by altering the true vale we will get different result
// //body click
// document.body.addEventListener("click",function(e){
//     console.log("body click")
//     e.stopPropagation();
// },true)

// //div click
// let div = document.getElementById("parent");

// div.addEventListener("click",function(){
//     console.log("div click")
// },true)

// //button click
// let btn = document.getElementById("btn");
// btn.addEventListener("click",function(e){
//     console.log("button click")
//     e.stopPropagation();
// },true)

// for only one to work from all use stop propgration

//body click
document.body.addEventListener("click",function(){
    console.log("body click")
    
})

//div click
let div = document.getElementById("parent");

div.addEventListener("click",function(){
    console.log("div click")
})

//button click
let btn = document.getElementById("btn");
btn.addEventListener("click",function(e){
    console.log("button click")
    e.stopPropagation();
>>>>>>> origin/main
})