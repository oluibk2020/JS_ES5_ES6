//ES 6 syntax of constructor function - in ES5, we have no class

//ES5 Constructor Function
function Person(fname, lname) {
    this.firstname = fname;
    this.lastname = lname;
    // this.fullname  = () => {
    //     return `my full name ${this.firstname} ${this.lastname}`
    // }
}

Person.prototype.fullname  = function () {
    return `${this.firstname} ${this.lastname}`
} 

const john = new Person('JOHN','taiwo')

console.log(john.fullname());

//add propertes
john.dob = '12/05/1992'
john.height = '130m'

//delete properties
delete john.height

//check for property in an object
console.log(john.hasOwnProperty('dob')); //true

//get keys
console.log(Object.keys(john));

//get values
console.log(Object.values(john));


//ES6 Constructor function
class Person2{
   constructor (fname,lname) {
        this.firstname = fname;
        this.lastname = lname;
    }
    fullname(){
        return `my fullname is ${this.firstname} ${this.lastname}`
    }
}

const bimbo = new Person2('mama','pikin')
console.log(bimbo);

//inheritance
class Employee extends Person{
    //creating constructor with previous parameters and new parameter
    constructor(fname,lname,salary){
        //importing parameters from person
        super(fname,lname)
        this.monthsalary = salary
    }
    getSalary() {
        let overTime = false
        if (overTime===true) {
            return 20+this.monthlysalary
        } else{
            return this.monthsalary
        }
    }
}

const kunle = new Employee('kunle','bally',50000)

console.log(kunle);

//Parent class
class Shape{
    constructor(name){
        this.name = name
    }

    logName(){
        console.log(`Shape name: ${this.name}`);
    }
}


class Rectangle extends Shape {
    constructor( name, width, height){
        super(name)
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height
    }

    perimeter(){
        return 2 * (this.width + this.height)
    }

    isSquare(){
        return this.width === this.height
    }
    logArea(){
        console.log(`The area is ${this.area()}`);
    }
}

const square = new Rectangle ('Square', 20 ,30)

console.log(square);
square.logName()