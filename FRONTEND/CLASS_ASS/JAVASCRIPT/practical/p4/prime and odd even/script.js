<<<<<<< HEAD

let btn = document.getElementById("submit")
btn.addEventListener ("click",val)
  function  val(){
    let number1 = parseFloat(document.getElementById('num1').value);
    let result;
    if(number1 % 2 == 0){
        result = "even";
       
    }else{
        result = "odd";
    }
    document.getElementById("result_value_check").innerHTML = result;
   return false 
}

// debugger
document.getElementById("prime").addEventListener("click",prime_chk)
function prime_chk(){
    let number2 = parseFloat(document.getElementById("num2").value);
    // console.log(number2)
    let i = 2;
    let j =0;
    let arr =[];
    while(number2 != 1){
        if(number2%i==0){
            console.log(i);
            number2 =number2/i;

                arr[j] =i;
                j++;
                // i++;
            }else{
                number2 == number2;
                i++;
            }
        }
        // console.log(arr.length )
        
        if(arr.length == 1){
            document.getElementById("result_value_prime").innerHTML = "a prime number";
            
        }else{
            
            document.getElementById("result_value_prime").innerHTML = "not a prime number";
        }
return false

=======

let btn = document.getElementById("submit")
btn.addEventListener ("click",val)
  function  val(){
    let number1 = parseFloat(document.getElementById('num1').value);
    let result;
    if(number1 % 2 == 0){
        result = "even";
       
    }else{
        result = "odd";
    }
    document.getElementById("result_value_check").innerHTML = result;
   return false 
}

// debugger
document.getElementById("prime").addEventListener("click",prime_chk)
function prime_chk(){
    let number2 = parseFloat(document.getElementById("num2").value);
    // console.log(number2)
    let i = 2;
    let j =0;
    let arr =[];
    while(number2 != 1){
        if(number2%i==0){
            console.log(i);
            number2 =number2/i;

                arr[j] =i;
                j++;
                // i++;
            }else{
                number2 == number2;
                i++;
            }
        }
        // console.log(arr.length )
        
        if(arr.length == 1){
            document.getElementById("result_value_prime").innerHTML = "a prime number";
            
        }else{
            
            document.getElementById("result_value_prime").innerHTML = "not a prime number";
        }
return false

>>>>>>> origin/main
}