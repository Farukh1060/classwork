// show method of payment
let chq = document.getElementById("cheque");
let u_p_i = document.getElementById("online");
let cse = document.getElementById("cash");

//cheque
chq.addEventListener("click",show_by_chq)

function show_by_chq(){
document.getElementById("show_chq").style = "display:block"
document.getElementById("show_upi").style = "display:none"
document.getElementById("show_case").style = "display:none"


}

//upi

u_p_i.addEventListener("click",show_by_u_p_i)

function show_by_u_p_i(){
    document.getElementById("show_upi").style = "display:block"
    document.getElementById("show_chq").style = "display:none"
    document.getElementById("show_case").style = "display:none"
}

//case
cse.addEventListener("click",show_by_cse)

function show_by_cse(){
    document.getElementById("show_upi").style = "display:none"
    document.getElementById("show_chq").style = "display:none"
    document.getElementById("show_case").style = "display:block"
}

//calculation
//total fees
let tot_amt = document.getElementById("cust_fees")

let amt1 = document.getElementById("amount1")
let amt2 = document.getElementById("amount2")
let amt3 = document.getElementById("amount3")

amt1.addEventListener("input",amo_unt1)
amt2.addEventListener("input",amo_unt2)
amt3.addEventListener("input",amo_unt3)

function amo_unt1(){
    document.getElementById("remaining_fees").value = (tot_amt.value - amt1.value )
}

function amo_unt2(){
    document.getElementById("remaining_fees").value = (tot_amt.value - amt2.value )
}

function amo_unt3(){
    document.getElementById("remaining_fees").value = (tot_amt.value - amt3.value )
}

//convert pdf
let b_t_n =  document.getElementById("btn")
b_t_n.addEventListener("click",to_pdf)
function to_pdf(){
    b_t_n.style = "display:none"
    window.print()
}

// console.log(b_t_n)