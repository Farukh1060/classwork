
let btn = document.getElementById("submit")
btn.addEventListener("click",val)
function val(){
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById("num2").value);
    let result;
    if(number1 > number2){
        // result = `number1 = ${number1} is greater that number2 = ${number2}`;
        result = number1;
    }else if(number2 > number1){
        // result = `number2 = ${number2} is greater that number1 = ${number1}`;
        result = number2;
    }else{
        result = "both are equal";
    }
    document.getElementById("result_value_max").innerHTML = result;

    if(result == number1){
        document.getElementById("result_value_min").innerHTML = number2;
    }else if (result == number2){
        document.getElementById("result_value_min").innerHTML = number1;
    }
    // return result;
}
