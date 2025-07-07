let number;
document.getElementById("btn").addEventListener("click",inp)
function inp(){
    number = document.getElementById("num").value;
    console.log(number)
    myfun(number)

}
function myfun(){
    document.getElementById("para").innerHTML = " "
    for(let i=1;i<=10;i++){
        document.getElementById("para").innerHTML += `${number} x ${i} = ${number * i}`+"<br>";
    }
return false;
}
