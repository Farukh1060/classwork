// comprassion operater with if else\


let age = 15;
let has_voter_card = "yes";

// if else elseif
//always check wrong condition first 
// if(age>=14 &&has_voter_card == "yes"){
    //if true
//     console.log("u can vote");
// }else if(age>=14 &&has_voter_card != "yes"){
        //if first condition is false
//     console.log("get u r voter card")
// } else{
    //if all conditon is false
//     console.log("u cant vote")
// }

// nested if else

if(age>=14){

    if(has_voter_card == "yes"){
        //if true
     console.log("u can vote");

    }else{
        console.log("get ur voter id");
    }

} else{
    console.log("u cant vote");
}

// ternery operater
let islogin=1;
let res = islogin == 1 ? "login":"logout";
//          condition      true :  false 
console.log(res);

// nullish colision operater
let user;
// let user = "farukh";
alert(user ?? "new user");
// if the user is undefine then next vale "new user will print"

// if(){

// }elseif(){
    
// }