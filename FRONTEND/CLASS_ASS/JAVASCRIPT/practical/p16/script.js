<<<<<<< HEAD
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let sel = document.getElementById("option")
let opt = document.querySelectorAll("option")

// for(let i = 0;i<opt.length;i++){
//     opt[i].addEventListener("click",function(){
//        console.log("ok")
//     })

// }
sel.addEventListener("change",function(){
    num1.addEventListener("input",function(){
        Number(num1.value)
    })
    num2.addEventListener("input",function(){
        Number(num2.value)
    })

    let sel_opt = sel.options[sel.selectedIndex].value
    // console.log(sel.options)
    switch(sel_opt){
        case "addition":
            console.log(Number (num1.value) + Number(num2.value))
            break;
        case "substraction":
            console.log(Number (num1.value) - Number(num2.value))
        break;
        case "multipilaction":
            console.log(Number (num1.value) * Number(num2.value))
        break;
        case "division":
            console.log(Number (num1.value) / Number(num2.value))
        break;
        case "module":
            console.log(Number (num1.value) % Number(num2.value))
        break;
        
    }
})





// let oper = 
// switch(){
// }
=======
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let sel = document.getElementById("option")
let opt = document.querySelectorAll("option")

// for(let i = 0;i<opt.length;i++){
//     opt[i].addEventListener("click",function(){
//        console.log("ok")
//     })

// }
sel.addEventListener("change",function(){
    num1.addEventListener("input",function(){
        Number(num1.value)
    })
    num2.addEventListener("input",function(){
        Number(num2.value)
    })

    let sel_opt = sel.options[sel.selectedIndex].value
    // console.log(sel.options)
    switch(sel_opt){
        case "addition":
            console.log(Number (num1.value) + Number(num2.value))
            break;
        case "substraction":
            console.log(Number (num1.value) - Number(num2.value))
        break;
        case "multipilaction":
            console.log(Number (num1.value) * Number(num2.value))
        break;
        case "division":
            console.log(Number (num1.value) / Number(num2.value))
        break;
        case "module":
            console.log(Number (num1.value) % Number(num2.value))
        break;
        
    }
})





// let oper = 
// switch(){
// }
>>>>>>> origin/main
