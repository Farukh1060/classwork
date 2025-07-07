let act = document.querySelectorAll(".nav-link");
console.log(act)

for (const element of act) {
    element.addEventListener("click",function(){
        element.classList.add("active")
    })
}