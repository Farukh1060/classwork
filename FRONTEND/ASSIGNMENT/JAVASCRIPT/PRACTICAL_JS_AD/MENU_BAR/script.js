let op_me = document.getElementById("xicon")
let cl_me = document.getElementById("bars")

let menu = document.getElementById("togg_me")
cl_me.addEventListener("click",function(){
    op_me.setAttribute("style","display: block;")
    cl_me.setAttribute("style","display: none;")
    menu.setAttribute("style","display: block;")
    return false
})
op_me.addEventListener("click",function(){
    cl_me.setAttribute("style","display: block;")
    op_me.setAttribute("style","display: none;")
    menu.setAttribute("style","display: none;")
    return false
})
// console.log(window.scrollY = 10)
window.addEventListener("scroll",function(e){
    if(this.window.scrollY==0){
        document.querySelector(".nav").setAttribute("style","background-color:red")
    }else {
        document.querySelector(".nav").setAttribute("style","background-color:rgb(250, 153, 153)")

    }
    return false
})

