<<<<<<< HEAD
// function to do repetetive work make function
//function is a block of code execute to perfome perticlure task
//and when needed call the function

// for(let i=1;i<=10;i++){
//     document.getElementById("para").innerHTML += `2 x ${i} = ${2*i}`+"<br>";
// }

// function without paramater

// function myfun(){
//     for(let i=1;i<=10;i++){
//         document.getElementById("para").innerHTML += `2 x ${i} = ${2*i}`+"<br>";
//     }
// }

// myfun();

// function with paramater

function myfun(num){
    for(let i=1;i<=10;i++){
        document.getElementById("para").innerHTML += `${num} x ${i} = ${num * i}`+"<br>";
    }

}

myfun(5);
myfun(8);

// function with paramater

// function add(num1,num2) {
//     document.write(num1 +num2) ;
// }
// add(2,5);

//--------------------------function argument object

//function argument object is the pre define object in function in which 
// all the argument enter in function during call, will save in a form of array
 
function argmt(){
    // console.log(arguments);
    for(let i=0;i<arguments.length;i++){
        document.write(arguments[i]);
    }

}
argmt(5,8,6,"d",5);


function add(){
    // console.log(arguments);
    sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    
    console.log(sum);
}

let addition = add;         //functionm store in vairable

addition(5,6);
add(5,8,6,5,5,);


=======
// function to do repetetive work make function
//function is a block of code execute to perfome perticlure task
//and when needed call the function

// for(let i=1;i<=10;i++){
//     document.getElementById("para").innerHTML += `2 x ${i} = ${2*i}`+"<br>";
// }

// function without paramater

// function myfun(){
//     for(let i=1;i<=10;i++){
//         document.getElementById("para").innerHTML += `2 x ${i} = ${2*i}`+"<br>";
//     }
// }

// myfun();

// function with paramater

function myfun(num){
    for(let i=1;i<=10;i++){
        document.getElementById("para").innerHTML += `${num} x ${i} = ${num * i}`+"<br>";
    }

}

myfun(5);
myfun(8);

// function with paramater

// function add(num1,num2) {
//     document.write(num1 +num2) ;
// }
// add(2,5);

//--------------------------function argument object

//function argument object is the pre define object in function in which 
// all the argument enter in function during call, will save in a form of array
 
function argmt(){
    // console.log(arguments);
    for(let i=0;i<arguments.length;i++){
        document.write(arguments[i]);
    }

}
argmt(5,8,6,"d",5);


function add(){
    // console.log(arguments);
    sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    
    console.log(sum);
}

let addition = add;         //functionm store in vairable

addition(5,6);
add(5,8,6,5,5,);


>>>>>>> origin/main
