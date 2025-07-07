<<<<<<< HEAD
let op_me = document.getElementById("xicon")
let cl_me = document.getElementById("bars")

let menu = document.getElementById("togg_me")
cl_me.addEventListener("click",function(){
    op_me.setAttribute("style","display: block;")
    cl_me.setAttribute("style","display: none;")
    menu.setAttribute("style","display: block;")
})
op_me.addEventListener("click",function(){
    cl_me.setAttribute("style","display: block;")
    op_me.setAttribute("style","display: none;")
    menu.setAttribute("style","display: none;")
})
// console.log(window.scrollY = 10)
let i=0;
    let one = document.getElementById("1")
    let two = document.getElementById("2")
    let three = document.getElementById("3")
    let four = document.getElementById("4")
// debuggers
window.addEventListener("scroll",function(e){
    if(this.window.scrollY < 10){
        document.querySelector(".nav").setAttribute("style","background-color:cadetblue;") 
        }else {
            document.querySelector(".nav").setAttribute("style","background-color:rgb(250, 153, 153)")
            }
            
            if(this.window.scrollY = 200){
        console.log(window.scrollY)
        c()   
    }
})

for(let j=0;j<4;j++){
    c(j)
}
function c(j){
    let sel =[one,two,three,four]
    let last = [500,900,1200,1600]

        if(i<=last[j]){
            sel[j].innerHTML = i
            i++
            setTimeout(function(){c(j)},1)
        }  
    }
         


    
   
=======
let op_me = document.getElementById("xicon")
let cl_me = document.getElementById("bars")

let menu = document.getElementById("togg_me")
cl_me.addEventListener("click",function(){
    op_me.setAttribute("style","display: block;")
    cl_me.setAttribute("style","display: none;")
    menu.setAttribute("style","display: block;")
})
op_me.addEventListener("click",function(){
    cl_me.setAttribute("style","display: block;")
    op_me.setAttribute("style","display: none;")
    menu.setAttribute("style","display: none;")
})
// console.log(window.scrollY = 10)
let i=0;
    let one = document.getElementById("1")
    let two = document.getElementById("2")
    let three = document.getElementById("3")
    let four = document.getElementById("4")
// debuggers
window.addEventListener("scroll",function(e){
    if(this.window.scrollY < 10){
        document.querySelector(".nav").setAttribute("style","background-color:cadetblue;") 
        }else {
            document.querySelector(".nav").setAttribute("style","background-color:rgb(250, 153, 153)")
            }
            
            if(this.window.scrollY = 200){
        console.log(window.scrollY)
        c()   
    }
})

for(let j=0;j<4;j++){
    c(j)
}
function c(j){
    let sel =[one,two,three,four]
    let last = [500,900,1200,1600]

        if(i<=last[j]){
            sel[j].innerHTML = i
            i++
            setTimeout(function(){c(j)},1)
        }  
    }
         


    
   
>>>>>>> origin/main
  