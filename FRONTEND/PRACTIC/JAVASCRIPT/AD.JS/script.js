// var let const
// var globle object property
// var can redeclare
// var can reassigne

// let block scop
// let can't redeclare
// let can reassign

// const block scope
// const can't redeclare
// const can't reassign

//  ------------------------------------default par----------------
function def(msg="default parameter"){
 console.log(msg)
}
// def("hello")

// --------------------------rest parameter----------------------------
// rest operater will values and make an array  in function parameter 
// we get values pass in arg so it will collect all values
function sum(...add){

    let result = 0;
    for(let i=0; i<add.length;i++){
        result = result + add[i];
    }
    // console.log(result)

}
sum(5,6,3)
// in destructur te rest value will collect in c and make an array
 
let arr = [1,2,3,4,5,6,7];
let [a,b,...c]= arr;
// console.log(c)


// --------------------------------spred---------------------------------
// call by value
// spred will sprad array inside value(1,2,3,4) in another array
let arr1 = [1,2,3,4];
let arr2=[...arr1]
// arr1[0]=10;
// console.log(arr2)
// console.log(arr1)

let obj = {
    fname:"farukh",
    age:"27",
    pincode:251
}
let obj2 ={
    ...obj,
    pincode:350
}
// console.log(obj2)
// ------------------------------------for of-------------------------------
// loop through value of an iterable object
for(let x of arr1){
    // console.log(x)
}
// ---------------------template ;iterial--------------
let str = "farukh"

// console.log(`my name is ${str} shaikh`)

// -------------------------array destructuring------------------------
//  the destructuring assignment syntax is a javascript expression
//  that make it possible to upack value from array 
// or properties from object ,into distinct variables

// destructuring is a technique that allow you to extract value
//  from array or object and assign them to seprate variables

let book = ["advance js",200,150,["js world",2012]];

// destructure
// let[nam , page, price,pub] = book;
// let[nam , page, price,pub= "grt"] = book;
// default value to pub
// pub will undefine first
// console.log(pub)
let[nam , page, price,[publication,year]] = book;
// console.log(year);

// function returing multiple value 
function destr(){
    return ["ad js",200]
}
let[title,pric] = destr()
// console.log(title)

// ----------------------------------object destructing-------------------
let books = {
    name1:"adjs",
    page1:200,
    price1:100,
    publication: {
        pun_name:"frontend",
        year1:2025
    }
}

let {name1:book_name,page1,price1,publication:{pun_name,year1="2010"}}=books;
// console.log(book_name)
// console.log(year1)

// -----------------------arrow function-------------------------------
// arrow function allow you to return a value implicitly
// increas readability
//normal
function sum(a ,b){
    return a +b;
}
// arrow
// let sumA = (a ,b) =>{
//     return a +b;
// }

let sumA = (a ,b) => a +b;
    
// console.log(sum(2,6))
// console.log(sumA(5,6))

let doubleA = a => 2 * a;
// console.log(doubleA(5))

// function random(){
//     return Math.random()
// }

let random = ()=> Math.random();
// console.log(random())

// arrow function
document.addEventListener("click",()=>{
    // console.log("click")
})

// -------------------------------callback function----------------------
// callback function is a function passed into another function 
// as a argument which is then invoked inside the outer function
//  to complete some kind of routine or action
function say(){
    console.log("hello")
}
function sayhi(){
    console.log("hi")
}
function add(num1,num2,callback){
    console.log(num1 + num2)
    callback()
}
// add(2,3,say)
// add(2,3,sayhi)
// add(2,3,()=>{console.log("bye")
// })

// ----------------------------------------hof----------------------------------------
// a function which take another function as a argument or
// return a function , or both it call high order function
function hof(fun){
    return ()=>{};
}
hof(()=>{})


// ---------------------------map function------------
// the map() method in javascript creat a new array by applying a function
// to each element of the original array
// it skip empty elements and does not alert the original array,
// make it idel for transforming data
let arr11 = [2,3,4,5,6,7];
let arr12 = arr11.map((val)=>{
    return val*3;
})
// console.log(arr12)

// -----------------------filter-------------------------
// the filter()method creates a new array filled with element 
// that pass a test provided by the function
let res = arr11.filter((val) =>{
    return val>4
})
// console.log(res)

let team =[
    {
        name : "farukh",
        position: "fulstack"

    },
    {
        name : "suraj",
        position: "backend"

    },
    {
        name : "john",
        position: "scientic"

    },
    {
        name : "tena",
        position: "developer"

    },
    {
        name : "mena",
        position: "developer"

    },
    {
        name : "deka",
        position: "developer"

    }
]
let res1 = team.filter((val)=>{
    return val.position == "developer";
})
// console.log(res1)
// ------------------------------------cookies-------------------
document.cookie = "item = milks ;expire = sat, 20 aug 2024 12:00:00 utc "
document.cookie = "loc = delhi"
document.cookie = "item = bread,egge";
// to get all cookies
// console.log(document.cookie)
// to delete cookies set expire date to past date

// --------------------------localStorage and sessional strorage----------------------
//                   cookie             local storage                  session storage
// capacity            4kb                  10mb                              5mb
// browser            html4/5              html5                             html5
// accessible from    any windo            any windo                        same tab
// expires            manually set          never                         on tabe close
// storage location   browser&server        browser                         browser
// sent with request     yes                   no                              no

// localStorage
localStorage.setItem('name','farukh');
localStorage.setItem('loc','delhi');
let x =localStorage.getItem('loc')
// console.log(x)
localStorage.removeItem('loc')

// sessionStorage
sessionStorage.setItem('name','farukh');
let y =localStorage.getItem('name')
// console.log(y)
sessionStorage.removeItem('name')

// ----------------------------------------JSON javscript Object notation---------------
// jason is a formate for storing and transporting data
// commonly use for API and config file
// {
//     "name":"farukh",
//     "age":25,
//     "lang":["c","c++","python"]
// }
// dont use single quote and dont use comma at last data

// ----------------------------JSON.parse------------------------

// whem we get data from api which is in json string formate
//  get data from json string
// assume we get data from server and store in varaible (this is json string)
let data = `{
    "name":"farukh",
    "age":25,
    "is_student":true,
    "passport_no":null,
    "lang":["c","c++","java"],
    "address":{
        "city":"surat",
        "state":"guj",
        "pincode":"394201"
    }
}`
// first convert it into javascript object
// access value 
let dobject =  JSON.parse(data);
// console.log(dobject["age"])
// console.log(dobject["lang"][1])
// console.log(dobject["address"])
// console.log(dobject["address"]["pincode"])

// ------------------------JSON.stringify--------------------------
// we have normal js object we want to sent to server
// so first convert into json string
let student = {
    nam:"farukh",
    age:25,
    pincode:"394210"
}
let data_string = JSON.stringify(student);
// console.log(data_string)

// ------------------------------oop--------------------------
// 1 object   2 class    3 inheritance

// in oops we group function and variable in block called class

// four piller of oops

// encapsulation : mean wraping up data 
// and member function together into single unit

// abstraction: is the process of showing only essential /nessary features
// of an entity /object to the outside world and hide the other irrelevant information

// inheritance: alowa a class to acquire the properties and behaviour of 
// another class 

// polymorphism :means many forms

let person1 = {
    firstname : "shaikh",
    "last name": "farukh",
    
    fulname : function(){
      console.log(this.firstname + " "+ this["last name"])
    }
}
person1.age = 25;
person1.sayhi = function(){
    console.log("say hi")
}

// console.log(person1.firstname)
// console.log(person1.age)
// console.log(person1["last name"])
// person1.fulname()
// person1.sayhi()

// now if we want to make person2 object we want to reapeat all step again
// this will break DRY RULL so for not reapeating or coping whole thing agan
// use construction function (es5) or class (es6)
// constructor function is a blue print form makig many object

// constructor

function Creature(ls){
this.life_span = ls
}
Creature.prototype.breath = function(){
    console.log("breathing")
}

let creature1 = new Creature(100)
// console.log(creature1 )

function Person(f_n,l_n,a){
    this.firstname = f_n;
    this.lastname = l_n;
    this.age = a;
    // this.changeage = function(newage){
    //     this.age = newage;
    // }
}

Person.prototype.changeage  = function(newage){
    this.age = newage;
}


// to replace prototypr of person with creature
// Person.prototype = Object.create(Creature.prototype)
Person.prototype.__proto__ = Object.create(Creature.prototype)

// let customer1 = new Person("SHAIK","FARUKH",25)
// console.log(customer1)
// let customer2 = new Person("SHAIK","FARUKH",25)
// customer2.changeage(27);
// console.log(customer2)



//prototype
// when we make constructure function prototype of that constructure is made
// and when we make object it connect with protype
// so what is in constructure ,is copy in every object hear property is copy
// in object which is good but methode is same for every object so it shoud be connet with 
// object with prototype so it will not reapet in code

// Person.prototype.changeage  = function(newage){
//         this.age = newage;
// }


// console.log(customer2.breath())


// to replace prototypr of person with creature
// Person.prototype = Object.create(Creature.prototype)

// to join the prototype of two objects


// class

class human{
    constructor(n ,a){
        this.name = n;
        this.age = a;
    }
    sayhi(){
        console.log("hi")
    }
}
let person3 = new human("farukh",25);
// person3.sayhi()
// console.log(person3)

// class and object ES6

class vehical {
    constructor(n,m){
        this.name = n;
        this.model = m;
        
        // constructor automaticly call when ever the object ceated
    }

    brand(){
        console.log("brandss")
    }

    static topspeed(){
        console.log("100m/s")
    }
    //static method only call with class name not with object name
}
let car1 = new vehical("bmw",230); //object created
// console.log(car1)
// car1.brand()
// vehical.topspeed()

// inherint

// class1
class emp {
    constructor(n){
        this.name =n;
        // console.log("emp conster coll")
    }
    msg(){
        console.log(" parent or emp ,hi")
    }
}

// class2 ,class2 inherite class1
// so all class1 method and property will access from class2

class mng extends emp{
    constructor(nam ,d){
        super(nam)  //super is use to call parent constructer function in child
        this.depertment=d;
    }
    msg(){
        console.log("emp hii")
    }

    info(){
        //if we have same method in both class use 
        //super to call parent method and use "this" to call child method
        super.msg()
        // this.msg()
        console.log(this.name + " is mng of dept of " +this.depertment)
    }

}
let mng1 = new mng("farukhs","web developement");
// mng1.info()
// admin will have both mng and emp
class admine extends mng {

}
let admine1 = new admine("far","web");
// console.log(admine1)

// ----------------------------- public privet---------------------------
