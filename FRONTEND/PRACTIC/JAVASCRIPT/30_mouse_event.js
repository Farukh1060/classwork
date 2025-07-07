<<<<<<< HEAD
//mouse event
let mou_evnt = document.getElementById("mouse_event");
 
// function mouse_ovr(){
//     alert("mouse over");
// }

// function mouse_out(){
//     alert("mouse out");
// }
function lclick(){
    alert("left click");
}
function rclick(){
    alert("right click");
}
function bdlclick(){
    alert("double  click");
}
function mouse_dwn(){
    alert("mouse dwn");
}

function mouse_up(){
    alert("mouse up");
}
mou_evnt.addEventListener("dblclick",bdlclick);    //right click first
mou_evnt.addEventListener("click",lclick);           //left click first
mou_evnt.addEventListener("contextmenu",rclick);    //right click first
// mou_evnt.addEventListener("mouseenter",rclick);
// mou_evnt.addEventListener("mouseout",mouse_out);
// mou_evnt.addEventListener("mousedown",mouse_dwn);  //when mouse kes down
// mou_evnt.addEventListener("mouseup",mouse_up);      //when mouse kes up

//keybord event

function keybord_evt(x){
console.log(x.key)
}

window.addEventListener("keypress",keybord_evt)  //keydown ,keyup

//scroll event

//for just detect scrolling
window.addEventListener("scroll",function(){
    console.log("scrolling....")
})

//if we want to set event on some fix  scrolling like after 500px 

window.addEventListener("scroll",function(){
    if(this.window.pageYOffset >1100 ){
        this.alert("hello")
    }
})



//wheel event
// if we want to detect scroll up or down

// window.addEventListener("wheel",function(e){
//     if(e.deltaY<0){
//         console.log("scroll up")
//     }else if(e.deltaY>0){
//         console.log("scroll down")
//     }else{
//         console.log("stop")
//     }
// })























=======
//mouse event
let mou_evnt = document.getElementById("mouse_event");
 
// function mouse_ovr(){
//     alert("mouse over");
// }

// function mouse_out(){
//     alert("mouse out");
// }
function lclick(){
    alert("left click");
}
function rclick(){
    alert("right click");
}
function bdlclick(){
    alert("double  click");
}
function mouse_dwn(){
    alert("mouse dwn");
}

function mouse_up(){
    alert("mouse up");
}
mou_evnt.addEventListener("dblclick",bdlclick);    //right click first
mou_evnt.addEventListener("click",lclick);           //left click first
mou_evnt.addEventListener("contextmenu",rclick);    //right click first
// mou_evnt.addEventListener("mouseenter",rclick);
// mou_evnt.addEventListener("mouseout",mouse_out);
// mou_evnt.addEventListener("mousedown",mouse_dwn);  //when mouse kes down
// mou_evnt.addEventListener("mouseup",mouse_up);      //when mouse kes up

//keybord event

function keybord_evt(x){
console.log(x.key)
}

window.addEventListener("keypress",keybord_evt)  //keydown ,keyup

//scroll event

//for just detect scrolling
window.addEventListener("scroll",function(){
    console.log("scrolling....")
})

//if we want to set event on some fix  scrolling like after 500px 

window.addEventListener("scroll",function(){
    if(this.window.pageYOffset >1100 ){
        this.alert("hello")
    }
})



//wheel event
// if we want to detect scroll up or down

// window.addEventListener("wheel",function(e){
//     if(e.deltaY<0){
//         console.log("scroll up")
//     }else if(e.deltaY>0){
//         console.log("scroll down")
//     }else{
//         console.log("stop")
//     }
// })























>>>>>>> origin/main
