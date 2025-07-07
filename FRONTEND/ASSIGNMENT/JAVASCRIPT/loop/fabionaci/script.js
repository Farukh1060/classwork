<<<<<<< HEAD

document.getElementById("btn").addEventListener("click",fabonice);

// console.log(fabo)
// console.log(fabo[fabo.length-1])
// console.log(fabo[fabo.length-2])

function fabonice(e){
    e.preventDefault()
    let fabo = [];
    fabo[0]=0;
    fabo[1]=1;
    let num = document.getElementById("num1").value
    document.getElementById("result_value").innerHTML = "";
    
    for(let i =0;i<num;i++){
        if(i<2){
            document.getElementById("result_value").innerHTML += (fabo[i])+" ";
            
        }
        else{
            // document.getElementById("result_value").innerHTML =null;
            fabo[i]=fabo[fabo.length-2] + fabo[fabo.length -1]
            document.getElementById("result_value").innerHTML += (fabo[i])+" ";
        }
        
        console.log(i)
    }
   
    return false;
}



=======

document.getElementById("btn").addEventListener("click",fabonice);

// console.log(fabo)
// console.log(fabo[fabo.length-1])
// console.log(fabo[fabo.length-2])

function fabonice(e){
    e.preventDefault()
    let fabo = [];
    fabo[0]=0;
    fabo[1]=1;
    let num = document.getElementById("num1").value
    document.getElementById("result_value").innerHTML = "";
    
    for(let i =0;i<num;i++){
        if(i<2){
            document.getElementById("result_value").innerHTML += (fabo[i])+" ";
            
        }
        else{
            // document.getElementById("result_value").innerHTML =null;
            fabo[i]=fabo[fabo.length-2] + fabo[fabo.length -1]
            document.getElementById("result_value").innerHTML += (fabo[i])+" ";
        }
        
        console.log(i)
    }
   
    return false;
}



>>>>>>> origin/main
