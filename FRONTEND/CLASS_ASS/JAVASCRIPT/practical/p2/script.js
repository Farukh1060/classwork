

let check = document.getElementById("show")
check.addEventListener("click",function(){
   let password =  document.getElementById("pass");
   if(password.type == "password"){
       password.setAttribute("type","text")
       
    }else if(password.type == "text"){
        password.setAttribute("type","password")
        
   }
})
