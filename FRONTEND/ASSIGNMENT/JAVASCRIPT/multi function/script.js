<<<<<<< HEAD
function myfun(num){
    
    for(let i=1;i<=10;i++){
        document.getElementById("para").innerHTML += `${num} x ${i} = ${num * i}`+"<br>";
    }
    return false
}

myfun(5);
myfun(8);

// type conversion
let x= "10";
let y = 10;
console.log(typeof(x))

=======
function myfun(num){
    
    for(let i=1;i<=10;i++){
        document.getElementById("para").innerHTML += `${num} x ${i} = ${num * i}`+"<br>";
    }
    return false
}

myfun(5);
myfun(8);

// type conversion
let x= "10";
let y = 10;
console.log(typeof(x))

>>>>>>> origin/main
console.log(typeof(String(y)))