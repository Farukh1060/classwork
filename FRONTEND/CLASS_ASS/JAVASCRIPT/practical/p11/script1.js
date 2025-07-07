<<<<<<< HEAD

// Yes, that's correct. When you assign an id to an HTML element, 
//the browser creates a global variable with the same name as
// the id. This is why you can access num1 and num2
// directly in your script without explicitly defining them.
// console.log(num1)
// console.log(num)   not with class
// best practic to declare before use


let sum =  document.getElementById("sum")
sum.addEventListener ("click",function(){
    let ans = (Number (num1.value) + Number(num2.value));
    document.getElementById("ans").innerHTML = ans;

})

let sub =  document.getElementById("sub")
sub.addEventListener ("click",function(){
    let ans = (Number (num1.value) - Number(num2.value));
    document.getElementById("ans").innerHTML = ans;

})

let mulit =  document.getElementById("multi")
multi.addEventListener ("click",function(){
    let ans = (Number (num1.value) * Number(num2.value));
    document.getElementById("ans").innerHTML = ans;

})
let divide =  document.getElementById("divide")
divide.addEventListener ("click",function(){
    let ans = (Number (num1.value) / Number(num2.value));
    document.getElementById("ans").innerHTML = ans;

})

let perc =  document.getElementById("perc")
perc.addEventListener ("click",function(){
    let ans = (Number (num1.value) / Number(num2.value))*100;
    document.getElementById("ans").innerHTML = ans + "%";

=======

// Yes, that's correct. When you assign an id to an HTML element, 
//the browser creates a global variable with the same name as
// the id. This is why you can access num1 and num2
// directly in your script without explicitly defining them.
// console.log(num1)
// console.log(num)   not with class
// best practic to declare before use


let sum =  document.getElementById("sum")
sum.addEventListener ("click",function(){
    let ans = (Number (num1.value) + Number(num2.value));
    document.getElementById("ans").innerHTML = ans;

})

let sub =  document.getElementById("sub")
sub.addEventListener ("click",function(){
    let ans = (Number (num1.value) - Number(num2.value));
    document.getElementById("ans").innerHTML = ans;

})

let mulit =  document.getElementById("multi")
multi.addEventListener ("click",function(){
    let ans = (Number (num1.value) * Number(num2.value));
    document.getElementById("ans").innerHTML = ans;

})
let divide =  document.getElementById("divide")
divide.addEventListener ("click",function(){
    let ans = (Number (num1.value) / Number(num2.value));
    document.getElementById("ans").innerHTML = ans;

})

let perc =  document.getElementById("perc")
perc.addEventListener ("click",function(){
    let ans = (Number (num1.value) / Number(num2.value))*100;
    document.getElementById("ans").innerHTML = ans + "%";

>>>>>>> origin/main
})