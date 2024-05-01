// const student = {
//     name : "abhishek",
//     prn : 2008,
//     mark : 45,
//     printMarks: function() {
//         console.log("marks = ", this.mark)
//     }

// }
// console.log(student.printMarks())

const employee = {
    calcTax1(){
        console.log('tax rate is 10%');
    },

    // calcTax2 : function(){
    //     console.log("tax rate is 10%");
    // }
};

const karanArjun = {
    salary: 50000,
    calcTax1(){
        console.log('tax rate is 20%');
    },
}
// const karanArjun1 = {
//     salary: 50000
// }
// const karanArjun2 = {
//     salary: 50000
// }
// const karanArjun3 = {
//     salary: 50000
// }
// const karanArjun4 = {
//     salary: 50000
// }

karanArjun.__proto__ = employee
// karanArjun1.__proto__ = employee
// karanArjun2.__proto__ = employee
// karanArjun3.__proto__ = employee
// karanArjun4.__proto__ = employee


//Classes
class Car{

    constructor(brand){
        console.log("Creating new Object");
        this.brand = brand;
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    
}

let car1 = new Car("fortuner")
let car2 = new Car()



//Inheritance

class Parent{
    hello(){
        console.log("Hello");
    }
}

class Child extends Parent{

}

let obj = new Child()
console.log(obj.hello());


class Person{
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("do nothing");
    }
}

class Engineer extends Person{
    constructor(name){
        super(name);  //to invoke the parent class constructor
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("Solve problem");
    }
}

let engObj = new Engineer("Chemical Engineer")
