<<<<<<< HEAD
// https://regexr.com/
let submit = document.getElementById("sub")

let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let add_ress= document.getElementById("address")
let city = document.getElementById("city")
let numb = document.getElementById("numb")
let e_mail = document.getElementById("e_mail")
let password = document.getElementById("password")
let cnfpassword = document.getElementById("cnfpassword")
let pw = document.getElementById("pw")
let cnfpw = document.getElementById("cnfpw")

pw.addEventListener("click",function(){
    if(password.type == "password" && pw.classList.contains("fa-eye-slash")){
        password.type = "text"
        pw.classList.remove("fa-eye-slash")
        pw.classList.add("fa-eye")
    }else{
        password.type = "password"
        pw.classList.remove("fa-eye")
        pw.classList.add("fa-eye-slash")

    }
    });
cnfpw.addEventListener("click",function(){
    if(cnfpassword.type == "password" && cnfpw.classList.contains("fa-eye-slash")){
        cnfpassword.type = "text"
        cnfpw.classList.remove("fa-eye-slash")
        cnfpw.classList.add("fa-eye")
    }else{
        cnfpassword.type = "password"
        cnfpw.classList.remove("fa-eye")
        cnfpw.classList.add("fa-eye-slash")

    }
});


let emt_inp = document.querySelectorAll("input")

let male = document.getElementById("male")
let fmale = document.getElementById("fmale")
let err = document.getElementById("err")

let msg = document.getElementsByTagName("P")
// console.log(msg)

// let keys = msg.keys()
// console.log(keys)

submit.addEventListener("click",chk)

function chk (e){
    e.preventDefault()
    first_name()
    last_name()
    gender()
    addr()
    ci_ty()
    num()
    mal()
    pass()
    cnf_pass()
}




function first_name(){

    let c_name = (fname.value).trim()
    let ptn = /^[a-z]*$/
    if(c_name == ""){
        msg[0].innerHTML = "empty";
        msg[0].classList.add("msg")
        emt_inp[0].classList.add("error")
    }else if(fname.value.length<3){
        msg[0].innerHTML = "at least 3 char";
        msg[0].classList.add("msg")
        emt_inp[0].classList.add("error")
    }
    else if(!ptn.test(c_name)){
        msg[0].innerHTML = "only char";
        msg[0].classList.add("msg")
        emt_inp[0].classList.add("error")
    
    }else{
        msg[0].innerHTML = "";
        msg[0].classList.remove("msg")
        emt_inp[0].classList.remove("error")
    }

}

function last_name(){

    let c_name = (lname.value).trim()
    let ptn = /^[a-z]*$/
    if(c_name == ""){
        msg[1].innerHTML = "empty";
        msg[1].classList.add("msg")
        emt_inp[1].classList.add("error")
    }else if(fname.value.length<3){
        msg[1].innerHTML = "at least 3 char";
        msg[1].classList.add("msg")
        emt_inp[1].classList.add("error")
    }
    else if(!ptn.test(c_name)){
        msg[1].innerHTML = "only char";
        msg[1].classList.add("msg")
        emt_inp[1].classList.add("error")
    
    }else{
        msg[1].innerHTML = "";
        msg[1].classList.remove("msg")
        emt_inp[1].classList.remove("error")
    }

}
function gender(){

    // let c_name = (lname.value).trim()
    
    if(male.checked == false && fmale.checked == false){
        msg[2].innerHTML = "select one!!";
        msg[2].classList.add("msg")
        err.classList.add("boder")
        
    }else{
        msg[2].innerHTML = "";
        msg[2].classList.remove("msg")
        err.classList.remove("boder")
    }

}

function addr(){

    let c_name = (add_ress.value).trim()
    // console.log(add_ress.value.length)
    let ptn = /^[a-z0-9 \s]*$/
    if(c_name == ""){
        msg[3].innerHTML = "empty";
        msg[3].classList.add("msg")
        add_ress.classList.add("error")
    }else if(add_ress.value.length < 35 || add_ress.value.length>200){
        msg[3].innerHTML = "add should > 35 and less then 200 char";
        msg[3].classList.add("msg")
        add_ress.classList.add("error")
    }
    else if(!ptn.test(c_name)){
        msg[3].innerHTML = "only char and number";
        msg[3].classList.add("msg")
        add_ress.classList.add("error")
    
    }else{
        msg[3].innerHTML = "";
        msg[3].classList.remove("msg")
        add_ress.classList.remove("error")
    }

}

function ci_ty(){

    let c_name = (city.value).trim()
    let ptn = /^[a-z]*$/
    if(c_name == ""){
        msg[4].innerHTML = "empty";
        msg[4].classList.add("msg")
        emt_inp[4].classList.add("error")
    }else if(!ptn.test(c_name)){
        msg[4].innerHTML = "only char";
        msg[4].classList.add("msg")
        emt_inp[4].classList.add("error")
    
    }else{
        msg[4].innerHTML = "";
        msg[4].classList.remove("msg")
        emt_inp[4].classList.remove("error")
    }

}
function num(){

    let c_name = (numb.value).trim()
    let ptn = /^[0-9]*$/
    if(c_name == ""){
        msg[5].innerHTML = "empty";
        msg[5].classList.add("msg")
        emt_inp[5].classList.add("error")
    }else if(!(numb.value.length >9)){
        msg[5].innerHTML = "at least 10 digit";
        msg[5].classList.add("msg")
        emt_inp[5].classList.add("error")
    }
    else if(!ptn.test(c_name)){
        msg[5].innerHTML = "only number";
        msg[5].classList.add("msg")
        emt_inp[5].classList.add("error")
    
    }else{
        msg[5].innerHTML = "";
        msg[5].classList.remove("msg")
        emt_inp[5].classList.remove("error")
    }

}

function mal(){

    let c_name = (e_mail.value).trim()
    let ptn = /^[A-Za-z0-9]+([\.\-\%\+]?[A-Za-z0-9])+@[A-Za-z]+\.([A-Za-z]{2,10})(\.[A-Za-z]{2,10})?$/
    if(c_name == ""){
        msg[6].innerHTML = "empty";
        msg[6].classList.add("msg")
        emt_inp[6].classList.add("error")
    }else if(!ptn.test(c_name)){
        msg[6].innerHTML = "not a corrent mail";
        msg[6].classList.add("msg")
        emt_inp[6].classList.add("error")
    
    }else{
        msg[6].innerHTML = "";
        msg[6].classList.remove("msg")
        emt_inp[6].classList.remove("error")
    }

}
function pass(){

    let c_name = (password.value).trim()
    let ptn = /^[A-Z][a-z0-9 @&#]*$/
    if(c_name == ""){
        msg[7].innerHTML = "empty";
        msg[7].classList.add("msg")
        emt_inp[7].classList.add("error")
    }else if(!ptn.test(c_name)){
        msg[7].innerHTML = "must first letter capital";
        msg[7].classList.add("msg")
        emt_inp[7].classList.add("error")
    
    }else{
        msg[7].innerHTML = "";
        msg[7].classList.remove("msg")
        emt_inp[7].classList.remove("error")
    }

}

function cnf_pass(){

    let c_name = (cnfpassword.value).trim()
    if(c_name == ""){
        msg[8].innerHTML = "empty";
        msg[8].classList.add("msg")
        emt_inp[8].classList.add("error")
    }else if(c_name != password.value){
        msg[8].innerHTML = "password not match";
        msg[8].classList.add("msg")
        emt_inp[8].classList.add("error")
    
    }else{
        msg[8].innerHTML = "";
        msg[8].classList.remove("msg")
        emt_inp[8].classList.remove("error")
    }

}

=======
// https://regexr.com/
let submit = document.getElementById("sub")

let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let add_ress= document.getElementById("address")
let city = document.getElementById("city")
let numb = document.getElementById("numb")
let e_mail = document.getElementById("e_mail")
let password = document.getElementById("password")
let cnfpassword = document.getElementById("cnfpassword")
let pw = document.getElementById("pw")
let cnfpw = document.getElementById("cnfpw")

pw.addEventListener("click",function(){
    if(password.type == "password" && pw.classList.contains("fa-eye-slash")){
        password.type = "text"
        pw.classList.remove("fa-eye-slash")
        pw.classList.add("fa-eye")
    }else{
        password.type = "password"
        pw.classList.remove("fa-eye")
        pw.classList.add("fa-eye-slash")

    }
    });
cnfpw.addEventListener("click",function(){
    if(cnfpassword.type == "password" && cnfpw.classList.contains("fa-eye-slash")){
        cnfpassword.type = "text"
        cnfpw.classList.remove("fa-eye-slash")
        cnfpw.classList.add("fa-eye")
    }else{
        cnfpassword.type = "password"
        cnfpw.classList.remove("fa-eye")
        cnfpw.classList.add("fa-eye-slash")

    }
});


let emt_inp = document.querySelectorAll("input")

let male = document.getElementById("male")
let fmale = document.getElementById("fmale")
let err = document.getElementById("err")

let msg = document.getElementsByTagName("P")
// console.log(msg)

// let keys = msg.keys()
// console.log(keys)

submit.addEventListener("click",chk)

function chk (e){
    e.preventDefault()
    first_name()
    last_name()
    gender()
    addr()
    ci_ty()
    num()
    mal()
    pass()
    cnf_pass()
}




function first_name(){

    let c_name = (fname.value).trim()
    let ptn = /^[a-z]*$/
    if(c_name == ""){
        msg[0].innerHTML = "empty";
        msg[0].classList.add("msg")
        emt_inp[0].classList.add("error")
    }else if(fname.value.length<3){
        msg[0].innerHTML = "at least 3 char";
        msg[0].classList.add("msg")
        emt_inp[0].classList.add("error")
    }
    else if(!ptn.test(c_name)){
        msg[0].innerHTML = "only char";
        msg[0].classList.add("msg")
        emt_inp[0].classList.add("error")
    
    }else{
        msg[0].innerHTML = "";
        msg[0].classList.remove("msg")
        emt_inp[0].classList.remove("error")
    }

}

function last_name(){

    let c_name = (lname.value).trim()
    let ptn = /^[a-z]*$/
    if(c_name == ""){
        msg[1].innerHTML = "empty";
        msg[1].classList.add("msg")
        emt_inp[1].classList.add("error")
    }else if(fname.value.length<3){
        msg[1].innerHTML = "at least 3 char";
        msg[1].classList.add("msg")
        emt_inp[1].classList.add("error")
    }
    else if(!ptn.test(c_name)){
        msg[1].innerHTML = "only char";
        msg[1].classList.add("msg")
        emt_inp[1].classList.add("error")
    
    }else{
        msg[1].innerHTML = "";
        msg[1].classList.remove("msg")
        emt_inp[1].classList.remove("error")
    }

}
function gender(){

    // let c_name = (lname.value).trim()
    
    if(male.checked == false && fmale.checked == false){
        msg[2].innerHTML = "select one!!";
        msg[2].classList.add("msg")
        err.classList.add("boder")
        
    }else{
        msg[2].innerHTML = "";
        msg[2].classList.remove("msg")
        err.classList.remove("boder")
    }

}

function addr(){

    let c_name = (add_ress.value).trim()
    // console.log(add_ress.value.length)
    let ptn = /^[a-z0-9 \s]*$/
    if(c_name == ""){
        msg[3].innerHTML = "empty";
        msg[3].classList.add("msg")
        add_ress.classList.add("error")
    }else if(add_ress.value.length < 35 || add_ress.value.length>200){
        msg[3].innerHTML = "add should > 35 and less then 200 char";
        msg[3].classList.add("msg")
        add_ress.classList.add("error")
    }
    else if(!ptn.test(c_name)){
        msg[3].innerHTML = "only char and number";
        msg[3].classList.add("msg")
        add_ress.classList.add("error")
    
    }else{
        msg[3].innerHTML = "";
        msg[3].classList.remove("msg")
        add_ress.classList.remove("error")
    }

}

function ci_ty(){

    let c_name = (city.value).trim()
    let ptn = /^[a-z]*$/
    if(c_name == ""){
        msg[4].innerHTML = "empty";
        msg[4].classList.add("msg")
        emt_inp[4].classList.add("error")
    }else if(!ptn.test(c_name)){
        msg[4].innerHTML = "only char";
        msg[4].classList.add("msg")
        emt_inp[4].classList.add("error")
    
    }else{
        msg[4].innerHTML = "";
        msg[4].classList.remove("msg")
        emt_inp[4].classList.remove("error")
    }

}
function num(){

    let c_name = (numb.value).trim()
    let ptn = /^[0-9]*$/
    if(c_name == ""){
        msg[5].innerHTML = "empty";
        msg[5].classList.add("msg")
        emt_inp[5].classList.add("error")
    }else if(!(numb.value.length >9)){
        msg[5].innerHTML = "at least 10 digit";
        msg[5].classList.add("msg")
        emt_inp[5].classList.add("error")
    }
    else if(!ptn.test(c_name)){
        msg[5].innerHTML = "only number";
        msg[5].classList.add("msg")
        emt_inp[5].classList.add("error")
    
    }else{
        msg[5].innerHTML = "";
        msg[5].classList.remove("msg")
        emt_inp[5].classList.remove("error")
    }

}

function mal(){

    let c_name = (e_mail.value).trim()
    let ptn = /^[A-Za-z0-9]+([\.\-\%\+]?[A-Za-z0-9])+@[A-Za-z]+\.([A-Za-z]{2,10})(\.[A-Za-z]{2,10})?$/
    if(c_name == ""){
        msg[6].innerHTML = "empty";
        msg[6].classList.add("msg")
        emt_inp[6].classList.add("error")
    }else if(!ptn.test(c_name)){
        msg[6].innerHTML = "not a corrent mail";
        msg[6].classList.add("msg")
        emt_inp[6].classList.add("error")
    
    }else{
        msg[6].innerHTML = "";
        msg[6].classList.remove("msg")
        emt_inp[6].classList.remove("error")
    }

}
function pass(){

    let c_name = (password.value).trim()
    let ptn = /^[A-Z][a-z0-9 @&#]*$/
    if(c_name == ""){
        msg[7].innerHTML = "empty";
        msg[7].classList.add("msg")
        emt_inp[7].classList.add("error")
    }else if(!ptn.test(c_name)){
        msg[7].innerHTML = "must first letter capital";
        msg[7].classList.add("msg")
        emt_inp[7].classList.add("error")
    
    }else{
        msg[7].innerHTML = "";
        msg[7].classList.remove("msg")
        emt_inp[7].classList.remove("error")
    }

}

function cnf_pass(){

    let c_name = (cnfpassword.value).trim()
    if(c_name == ""){
        msg[8].innerHTML = "empty";
        msg[8].classList.add("msg")
        emt_inp[8].classList.add("error")
    }else if(c_name != password.value){
        msg[8].innerHTML = "password not match";
        msg[8].classList.add("msg")
        emt_inp[8].classList.add("error")
    
    }else{
        msg[8].innerHTML = "";
        msg[8].classList.remove("msg")
        emt_inp[8].classList.remove("error")
    }

}

>>>>>>> origin/main
