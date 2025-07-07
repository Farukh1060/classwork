let setting_container = document.getElementById("sett_con");
let profile_img = document.getElementById("pro_img");
profile_img.addEventListener("click",function(){
    setting_container.classList.toggle("dblock");
})
// ------------------------------toggle button-------------------------
let btnn = document.getElementById("button")
btnn.addEventListener("click",function(){

    this.classList.toggle("togl")
    document.body.classList.toggle("dark_them")

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme","dark")
    }else{
        localStorage.setItem("theme","light")
    }
})

// -----------------------------local storage--------------------
if(localStorage.getItem("theme")== "light"){
    btnn.classList.remove("togl")
    document.body.classList.remove("dark_them")
}else if(localStorage.getItem("theme")== "dark"){
    btnn.classList.add("togl")
    document.body.classList.add("dark_them")
}else{
    localStorage.setItem("theme","light");
}
