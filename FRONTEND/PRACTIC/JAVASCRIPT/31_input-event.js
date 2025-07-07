<<<<<<< HEAD
// inpute event
let fom_evt = document.getElementById("my_form");


//focus abd blure on inpute 


function focus_bg(){
    fom_evt.style.cssText = "background-color: yellow;"
}
function blur_bg(){
    fom_evt.style.cssText = "background-color: white;"
}

fom_evt.addEventListener("focus",focus_bg);
fom_evt.addEventListener("blur",blur_bg);

//on changing the inpute value
 
function change_ip(){
    // console.log("change")
    console.log(this.value)
}

fom_evt.addEventListener("change",change_ip);

//inpute event

function input_ip(){
    // console.log("change")
    console.log(this.value)
}

=======
// inpute event
let fom_evt = document.getElementById("my_form");


//focus abd blure on inpute 


function focus_bg(){
    fom_evt.style.cssText = "background-color: yellow;"
}
function blur_bg(){
    fom_evt.style.cssText = "background-color: white;"
}

fom_evt.addEventListener("focus",focus_bg);
fom_evt.addEventListener("blur",blur_bg);

//on changing the inpute value
 
function change_ip(){
    // console.log("change")
    console.log(this.value)
}

fom_evt.addEventListener("change",change_ip);

//inpute event

function input_ip(){
    // console.log("change")
    console.log(this.value)
}

>>>>>>> origin/main
fom_evt.addEventListener("input",input_ip);