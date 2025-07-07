// document.getElementById("para").innerHTML = "hello world";
// document.write('hello')
// window.alert("output");
// console.log(3+8);

//object 
const person = {
    fname:"master", //name(fname) and value(master) pair = properties 
    lname:"cam",
    ver:"2020",
    
    softname: function (){
        return this.fname + " " + this.lname;  //method is the function stored as properties
    }
};
 //  two way to access object propertied with dot . or with object["properties"]


// document.getElementById("para").innerHTML = person.softname();
// document.getElementById("para").innerHTML = person.fname;
// document.getElementById("para").innerHTML = person["lname"];


//string

// let name1 = `the "mastercam" is soft`; 
let name1 = "the OK \" masterCAM \" is softwar , masterCAM is easy to use, mastercam save time of programing, mastercam increas prodoctivity   "; 
console.log(name1);
// console.log(name1.length);

// ------------------------------------------------------string method-------------------------------


//extracting char

// console.log(name1.charAt(0));
// console.log(name1.charCodeAt(0));
// console.log(name1[5]);

//extracting string part

// slic(start,end) end position not include and 

// it end is not given show whole string from given starting position
// document.getElementById("para").innerHTML = name1.slice(5,11)  ;
// document.getElementById("para").innerHTML = name1.slice(5)  ;
// document.getElementById("para").innerHTML = name1.slice(-11,-6)  ;


//substring same as slice
// only neg value is treated as 0

// document.getElementById("para").innerHTML = name1.substring(5,-10)  ; 
// document.getElementById("para").innerHTML = name1.substring(-10)  ;


//substr(start ,length)
// document.getElementById("para").innerHTML = name1.substr(5,5)  ; 


//TOUPPERCASE

// document.getElementById("para").innerHTML = name1.toUpperCase()  ;
// document.getElementById("para").innerHTML = name1.toLowerCase()  ;
// document.getElementById("para").innerHTML = name1.toLowerCase()  ;

//concat()
// document.getElementById("para").innerHTML = name1.concat(" ", "for programing", " dttghftg" ) ;

//trim

// console.log(name1.trim());
// console.log(name1.trimStart());
// console.log(name1.trimEnd());

//PADSTART
//padding value shoud be more thane string length other wise no effect
// name1 = name1.padStart(34,"x");
// document.getElementById("para").innerHTML= name1;

//repeat
// document.getElementById("para").innerHTML= name1.repeat(2);

//replace
//only replace 1st match
// document.getElementById("para").innerHTML= name1.replace("masterCAM","solidcam");  


// to replace all use this syntax /masterCAM/g this is case sensitive
// for case insesetive use /i 
// document.getElementById("para").innerHTML= name1.replace(/masterCAM/i," solidcam ");  
// document.getElementById("para").innerHTML = name1.replace(/masterCAM/gi,"SOLIDWORK")


//replaceall

//  document.getElementById("para").innerHTML= name1.replaceAll(/masterCAM/gi,"solidcam");  

//split

//  document.getElementById("para").innerHTML= name1.split("");  


// -----------------------------------------------string serch method----------------------------------

// indexof("STRING", START POSITION), lastindexof("STRING", START POSITION), search(), match(), matchall(), include(), startswith(), endswith()

// indexof("STRING", START POSITION)
// console.log(name1.indexOf("master"));
// console.log(name1.indexOf("master",10));
// console.log(name1.indexOf("svz")); return -1 when not find

// lastindexof("STRING", START POSITION)
// console.log(name1.lastIndexOf("master"));
// console.log(name1.lastIndexOf("master",25)); 
// console.log(name1.lastIndexOf("masterJ")); return -1 when not find

// search()
// console.log(name1.search(/Master/gi));

// match()
// console.log(name1.match("master"));
// console.log(name1.match(/mastercam/gi));


// matchAll()
// console.log(name1.matchAll("master"));
// console.log(name1.match(/mastercam/gi));

// include(string , start position)
// console.log(name1.includes("master")); return true
// console.log(name1.includes("mastelr")); return false
// console.log(name1.includes("softwar", 30)); 


// startswith(string , start position)
// console.log(name1.startsWith("the")); 
// same endwith




















