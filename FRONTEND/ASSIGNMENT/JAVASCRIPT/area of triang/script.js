<<<<<<< HEAD

let in_num1 = document.getElementById("num1")
in_num1.addEventListener ("input",val)
function val(){
    let in_num2 = document.getElementById("num2").value = (this.value/365)
  return false
}

let in_num2 = document.getElementById("num2")
in_num2.addEventListener ("input",val1)
function val1(){
    let in_num1 = document.getElementById("num1").value = (this.value*365)
  return false
}

let in_tem1 = document.getElementById("tem1")
in_tem1.addEventListener ("input",fer)
function fer(){
  // let c = (this.value - 32 )* 0.5556
    let in_tem2 = document.getElementById("tem2").value = ((this.value - 32 )* 0.5556)
  return false
}

let in_tem2 = document.getElementById("tem2")
in_tem2.addEventListener ("input",cel)
function cel(){
  // let f = (this.value * 1.8) + 32
    let in_tem1 = document.getElementById("tem1").value = ((this.value * 1.8) + 32)
  return false    
=======

let in_num1 = document.getElementById("num1")
in_num1.addEventListener ("input",val)
function val(){
    let in_num2 = document.getElementById("num2").value = (this.value/365)
  return false
}

let in_num2 = document.getElementById("num2")
in_num2.addEventListener ("input",val1)
function val1(){
    let in_num1 = document.getElementById("num1").value = (this.value*365)
  return false
}

let in_tem1 = document.getElementById("tem1")
in_tem1.addEventListener ("input",fer)
function fer(){
  // let c = (this.value - 32 )* 0.5556
    let in_tem2 = document.getElementById("tem2").value = ((this.value - 32 )* 0.5556)
  return false
}

let in_tem2 = document.getElementById("tem2")
in_tem2.addEventListener ("input",cel)
function cel(){
  // let f = (this.value * 1.8) + 32
    let in_tem1 = document.getElementById("tem1").value = ((this.value * 1.8) + 32)
  return false    
>>>>>>> origin/main
}