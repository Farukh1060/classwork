<<<<<<< HEAD

document.getElementById("btn").addEventListener("click",sum_num);



// debugger
function sum_num(e){
    e.preventDefault()
    let sum =0;
    document.getElementById("result_value").innerHTML = ''
    let num = document.getElementById("num1").value
    let i=0;
    while(num/10 !=0){
        let R_num = num%10;
        console.log(num/10)
        num = Math.trunc(num/10);
        if(i==0 ||num/10==0 ){ 
            sum = sum+ R_num

            i++;
        }
        // sum = sum + R_num;
        document.getElementById("result_value").innerHTML=(sum);
    }

    return false
}

=======

document.getElementById("btn").addEventListener("click",sum_num);



// debugger
function sum_num(e){
    e.preventDefault()
    let sum =0;
    document.getElementById("result_value").innerHTML = ''
    let num = document.getElementById("num1").value
    let i=0;
    while(num/10 !=0){
        let R_num = num%10;
        console.log(num/10)
        num = Math.trunc(num/10);
        if(i==0 ||num/10==0 ){ 
            sum = sum+ R_num

            i++;
        }
        // sum = sum + R_num;
        document.getElementById("result_value").innerHTML=(sum);
    }

    return false
}

>>>>>>> origin/main
