<<<<<<< HEAD
// DOM_event are action that occur as a result
// of the user action or as result of state 
//change of the element of dom tree
//event : mouse click,page load,image load
//inp feald change,html form submit, whem key strokes

// two type to register event
// inline abd by eventlistner

// inline 
// make function and register inline in html

function clkinl(){
    console.log(" by inline regester btn clk")
}

// by eventlistner
let elm = document.getElementById("btn2");
elm.addEventListener("click",clkevlnr)

function clkevlnr(){
    console.log("by addeventlistiner btn clk")
}

// using anonymous function
let elm1 = document.getElementById("btn3");
elm1.addEventListener("click",function(){
    console.log("by addeventlistiner and anonymous function  btn clk")
})

// firts make function 
//then register event by addeventlister or by inline regester

function mouse_ovr(){
    console.log("mouse over")
}
function mouse_out(){
    console.log("mouse out")
}

function remove_evtlcr(){
    console.log("removed")
}

elm.addEventListener("mouseover",mouse_ovr);
elm.addEventListener("mouseout",mouse_out);
elm.addEventListener("click",remove_evtlcr)


// removeEventListener
elm.removeEventListener("click",remove_evtlcr)

//page lode event

// DOM contant loded :the browser fully loded html and complite
//bulding the DOM tree,howeverit hasnt load externalresorces
//like stylsheet and img
// external file is not loded

//load :the browser fully loded the html and also externel resorces
//like img and stylsheet
//when u leave the page the following event fire in sequence


// we can set load event to some perticular element 
let imag_load = document.getElementById("imgload");
console.log(imag_load);

imag_load.addEventListener("load",function(){
    console.log("img loded")
})

window.addEventListener("load",load_evt)

function load_evt(){
    console.log("load event")
}

window.addEventListener("DOMContentLoaded",DCload_evt)

function DCload_evt(){
    console.log(" dom TREE LODED event")
}

=======
// DOM_event are action that occur as a result
// of the user action or as result of state 
//change of the element of dom tree
//event : mouse click,page load,image load
//inp feald change,html form submit, whem key strokes

// two type to register event
// inline abd by eventlistner

// inline 
// make function and register inline in html

function clkinl(){
    console.log(" by inline regester btn clk")
}

// by eventlistner
let elm = document.getElementById("btn2");
elm.addEventListener("click",clkevlnr)

function clkevlnr(){
    console.log("by addeventlistiner btn clk")
}

// using anonymous function
let elm1 = document.getElementById("btn3");
elm1.addEventListener("click",function(){
    console.log("by addeventlistiner and anonymous function  btn clk")
})

// firts make function 
//then register event by addeventlister or by inline regester

function mouse_ovr(){
    console.log("mouse over")
}
function mouse_out(){
    console.log("mouse out")
}

function remove_evtlcr(){
    console.log("removed")
}

elm.addEventListener("mouseover",mouse_ovr);
elm.addEventListener("mouseout",mouse_out);
elm.addEventListener("click",remove_evtlcr)


// removeEventListener
elm.removeEventListener("click",remove_evtlcr)

//page lode event

// DOM contant loded :the browser fully loded html and complite
//bulding the DOM tree,howeverit hasnt load externalresorces
//like stylsheet and img
// external file is not loded

//load :the browser fully loded the html and also externel resorces
//like img and stylsheet
//when u leave the page the following event fire in sequence


// we can set load event to some perticular element 
let imag_load = document.getElementById("imgload");
console.log(imag_load);

imag_load.addEventListener("load",function(){
    console.log("img loded")
})

window.addEventListener("load",load_evt)

function load_evt(){
    console.log("load event")
}

window.addEventListener("DOMContentLoaded",DCload_evt)

function DCload_evt(){
    console.log(" dom TREE LODED event")
}

>>>>>>> origin/main
