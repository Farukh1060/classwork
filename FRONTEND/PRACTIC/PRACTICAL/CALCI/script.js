
let btn = document.querySelectorAll(".btn")
let inp =  document.getElementById("calculate")
// let digit1 = [];
// for(let i =0;i<btn.length;i++){
//     btn[i].addEventListener("click",function(){
//        let val = btn[i].value 
//        console.log(val)
//        inp.value += val;
//         if(btn[i].value == "="){
            
//            let res = (eval(inp.value.slice(0,-1)))
//            inp.value = res;

//         }else if(btn[i].value == "ce"){
//             inp.value = "";
//         }
//        return false
//     })

// }

// console.log(btn)








// debugger
let keys = btn.keys();
let i=0;
for (const x of keys) {
    btn[x].addEventListener("click",function(){
        
        
        console.log(btn[x].value)

        if(btn[x].value == "="){

            let res = eval( inp.value)
            inp.value = res
        }else if(btn[x].value == "ce"){
            inp.value=" "
        } else{
            inp.value += btn[x].value;
        }
       
    })
}


