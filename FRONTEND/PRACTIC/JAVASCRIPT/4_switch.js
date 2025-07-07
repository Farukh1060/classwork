// switch case
// with if else
let input = "yes";      // === check vale and datatype 
// if(input === 1){
//     console.log("pass");
// }else if(input ==="y"){
//     console.log("pass");
// }else if(input ==="yes"){
//     console.log("pass");
// }else if(input === 0){
//     console.log("fail");
// }else if(input ==="n"){
//     console.log("fail");
// }else if(input ==="no"){
//     console.log("fail");
// }else {
//     console.log("wrong input");
// }

// hear input value is compare with case vale
// when comparision is true print the current case and break out of current block scope
// and if we neglate break it will print all case after getting condition true
switch(input){
    case 1:
        document.write("pass");
        //  break ;

        
    case "y": 
        document.write("pass");
        //  break;

    case "yes": 
        document.write("pass");
        //  break;

     case 0: 
         document.write("fail");
        //  break; 

     case "n": 
         document.write("fail");
        //  break; 
    case "no": 
         document.write("fail");
         break;    
    default:
        document.write("wrong input");
}