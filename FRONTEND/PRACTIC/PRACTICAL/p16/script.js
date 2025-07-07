let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let sel = document.getElementById("option")
let opt = document.querySelectorAll("option")
let ans =document.getElementById("ans")

// for(let i = 0;i<opt.length;i++){
//     opt[i].addEventListener("click",function(){
//        console.log("ok")
//     })

// }
sel.addEventListener("change",function(){
    num1.addEventListener("input",function(){
        Number(num1.value)
        return false
    })
    num2.addEventListener("input",function(){
        Number(num2.value)
        return false
    })

    let sel_opt = sel.options[sel.selectedIndex].value
    // console.log(sel.options)
    switch(sel_opt){
        case "addition":
            ans.innerHTML = (Number (num1.value) + Number(num2.value))
            break;
        case "substraction":
            ans.innerHTML =(Number (num1.value) - Number(num2.value))
        break;
        case "multipilaction":
            ans.innerHTML =(Number (num1.value) * Number(num2.value))
        break;
        case "division":
            ans.innerHTML =(Number (num1.value) / Number(num2.value))
        break;
        case "module":
            ans.innerHTML =(Number (num1.value) % Number(num2.value))
        break;
        
    }
    return false
})





// let oper = 
// switch(){
// }
