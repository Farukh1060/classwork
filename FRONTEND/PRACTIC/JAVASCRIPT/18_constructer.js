<<<<<<< HEAD
//sumtime we need a blueprint for creating many object of the same type
//the way to creat an object type is to use an object constructerfunction

function Student (first ,last ,age ,cls){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.class = cls;

    this.name = function(){
        return this.firstname + " " + this.lastname;
    }
}
let student1 = new Student("shaikh","farukh",23 , 3);
let student2 = new Student("sha","far",25 , 8);
//add in student1
student1.language = "hindi";
console.log(student1);

//to add in constructer function use prototype

Student.prototype.nationality = "india";
=======
//sumtime we need a blueprint for creating many object of the same type
//the way to creat an object type is to use an object constructerfunction

function Student (first ,last ,age ,cls){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.class = cls;

    this.name = function(){
        return this.firstname + " " + this.lastname;
    }
}
let student1 = new Student("shaikh","farukh",23 , 3);
let student2 = new Student("sha","far",25 , 8);
//add in student1
student1.language = "hindi";
console.log(student1);

//to add in constructer function use prototype

Student.prototype.nationality = "india";
>>>>>>> origin/main
console.log(student1.name());