<<<<<<< HEAD

let btn = document.getElementById("result")
btn.addEventListener ("click",val)
  function  val(e){
    e.preventDefault()
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);
// for triangle
let result1 = 0.5 * number1 * number2;
document.getElementById("result_value_tri").innerHTML = result1;

// for rectangle
    let result2 = 2*(number1 + number2)
    document.getElementById("result_value_rect").innerHTML = result2;


    return false;
  }
// day left in cristmas

let x = new Date();
let y = new Date(2024,11,25)
let day_left;

day_left = (y - x)

console.log(x);
console.log(y);
console.log(day_left/(1000*60*60*24));
=======

let btn = document.getElementById("result")
btn.addEventListener ("click",val)
  function  val(e){
    e.preventDefault()
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);
// for triangle
let result1 = 0.5 * number1 * number2;
document.getElementById("result_value_tri").innerHTML = result1;

// for rectangle
    let result2 = 2*(number1 + number2)
    document.getElementById("result_value_rect").innerHTML = result2;


    return false;
  }
// day left in cristmas

let x = new Date();
let y = new Date(2024,11,25)
let day_left;

day_left = (y - x)

console.log(x);
console.log(y);
console.log(day_left/(1000*60*60*24));
>>>>>>> origin/main
