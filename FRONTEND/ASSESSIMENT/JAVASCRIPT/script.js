//dropdown
let arrow =document.getElementById("arrow")
let option_container = document.getElementById("option_container")
let opt = document.querySelectorAll("option")
let option_value = document.getElementById("option_value")
let right_btn = document.querySelectorAll(".fa-caret-right")
let restaurants = document.getElementById("restaurants")
console.log(right_btn)


arrow.addEventListener("click",function(){
    if(arrow.className =="fa-solid fa-chevron-down"){
        arrow.classList.replace("fa-chevron-down","fa-chevron-up")
        option_container.setAttribute("style","display:block")
    }else{
        arrow.classList.replace("fa-chevron-up","fa-chevron-down")
        option_container.setAttribute("style","display:none")
        

    }
    return false;
})

for(let i=0;i<opt.length;i++){

    opt[i].addEventListener("click",function(){
        // opt[i].innerText == option_value.innerHTML
        option_value.value = opt[i].innerText.toUpperCase()


        if(restaurants.lastElementChild.className == "ok grid"){
            restaurants.removeChild(restaurants.lastElementChild)
        }

        
        let div = document.createElement("div")
        div.className="ok grid"
        switch(i){
            case 0:
              div.innerHTML = '<label for="date">booking date : </label> <input type="date" id="date">'
              restaurants.appendChild(div)
              arrow.classList.replace("fa-chevron-up","fa-chevron-down")
              option_container.setAttribute("style","display:none")
           
            break;

            case 1:
                div.innerHTML = '<label for="date">booking date : </label> <input type="date" id="date"> <label for="slot">booking slot : </label>'
                let creat_ul = document.createElement("select");
        
                for(let i=0;i<3;i++){
                    let solt_pot = document.createElement("option")
                    creat_ul.appendChild(solt_pot)
                    
                }
                creat_ul.options[0].innerHTML="BREAKFAST"
                creat_ul.options[1].innerHTML="LUNCH"
                creat_ul.options[2].innerHTML="DINNER"
                div.appendChild(creat_ul)
              restaurants.appendChild(div)
              arrow.classList.replace("fa-chevron-up","fa-chevron-down")
              option_container.setAttribute("style","display:none")
            break; 

            case 2:
                div.innerHTML = '<label for="date">booking date : </label> <input type="date" id="date"> <label for="time">select time : </label> <input type="time" id="time">'
                restaurants.appendChild(div)
                arrow.classList.replace("fa-chevron-up","fa-chevron-down")
                option_container.setAttribute("style","display:none")
            break;


        }
        return false
    })
    
}

