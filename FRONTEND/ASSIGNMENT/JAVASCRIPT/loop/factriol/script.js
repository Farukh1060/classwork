<<<<<<< HEAD
//print  972 to 897
// for(let i = 972;i>=897;i--){
//     console.log(i)
// }

//factriol of a number
document.getElementById("btn").addEventListener("click",fact)

function fact(){

let factriol = 1;
let num = document.getElementById("num1").value
for(let j = num;j>=1;j--){
 factriol = factriol *j;
 document.getElementById("result_value").innerHTML += (factriol);
}
return false;
=======
//print  972 to 897
// for(let i = 972;i>=897;i--){
//     console.log(i)
// }

//factriol of a number
document.getElementById("btn").addEventListener("click",fact)

function fact(){

let factriol = 1;
let num = document.getElementById("num1").value
for(let j = num;j>=1;j--){
 factriol = factriol *j;
 document.getElementById("result_value").innerHTML += (factriol);
}
return false;
>>>>>>> origin/main
}