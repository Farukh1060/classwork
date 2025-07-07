<<<<<<< HEAD
//getter and setter allow to control how object properties are accessed and modify
//getter and setter can be use to validate data before it is set to an object
let person ={
    firstname : "masters",
    lastname : "cam",


    // getname : function(){
    //     console.log(this.firstname.toUpperCase());
    // }

    get getname(){
        return this.firstname;
    },

    set setname (change){
        return this.firstname = change.toUpperCase();
    }

}
console.log(person.firstname);   
console.log(person.getname);
//person.getname();   ////////call method to axcess property 
person.setname = "solid";


=======
//getter and setter allow to control how object properties are accessed and modify
//getter and setter can be use to validate data before it is set to an object
let person ={
    firstname : "masters",
    lastname : "cam",


    // getname : function(){
    //     console.log(this.firstname.toUpperCase());
    // }

    get getname(){
        return this.firstname;
    },

    set setname (change){
        return this.firstname = change.toUpperCase();
    }

}
console.log(person.firstname);   
console.log(person.getname);
//person.getname();   ////////call method to axcess property 
person.setname = "solid";


>>>>>>> origin/main
console.log(person.firstname);         