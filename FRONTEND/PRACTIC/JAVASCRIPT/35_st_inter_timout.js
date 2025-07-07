<<<<<<< HEAD
// set timeout() it is globle method set a timer which execute a function or specific piece of code once the timer expire
//retun timeoutid which can be used in cleat time out to clear 

//set interval  repetedly call a function or exeecution a code
// sniped with a fixed time dealy betwwn each call
//retrn intervalid 


let return_id = setInterval(settime,2000)

function settime(){
    console.log("subscript")
}

//clearinterval
let cler = document.getElementById("clr")
cler.addEventListener("click",clr_int)
function clr_int(){
    clearInterval(return_id);
}

// set timeout

// let return_id = setTimeout(timout,2000)

// function timout(){
//     console.log("timeout")
// }

// let cler = document.getElementById("clr")
// cler.addEventListener("click",settimout)
// function settimout(){
//     clearTimeout(return_id);
=======
// set timeout() it is globle method set a timer which execute a function or specific piece of code once the timer expire
//retun timeoutid which can be used in cleat time out to clear 

//set interval  repetedly call a function or exeecution a code
// sniped with a fixed time dealy betwwn each call
//retrn intervalid 


let return_id = setInterval(settime,2000)

function settime(){
    console.log("subscript")
}

//clearinterval
let cler = document.getElementById("clr")
cler.addEventListener("click",clr_int)
function clr_int(){
    clearInterval(return_id);
}

// set timeout

// let return_id = setTimeout(timout,2000)

// function timout(){
//     console.log("timeout")
// }

// let cler = document.getElementById("clr")
// cler.addEventListener("click",settimout)
// function settimout(){
//     clearTimeout(return_id);
>>>>>>> origin/main
// }