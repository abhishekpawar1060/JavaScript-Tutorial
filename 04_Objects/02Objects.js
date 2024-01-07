const tinderUser = new Object() // This is singleton object
//console.log(tinderUser);

const tinderUser2 = {}          // This is Non-Singleton object
//console.log(tinderUser2);

tinderUser.id = "2008abhi";
tinderUser.name = "Rocky";  
tinderUser.isLoggedIn = false;

console.log(tinderUser);


const regularUser = {
    email : "abc@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Abhi",
            lastName : "Pawar",
        }
    }
}

console.log(regularUser.fullName?.userFullName.firstName);


const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};

//const obj3 = {obj1,obj2};
const obj3 = Object.assign({},obj1,obj2); // This empty {} is source all objects are goes to this empty {}.
const obj4 = {...obj1,...obj2};
console.log(obj3);
console.log(obj4);


const user = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "xyz@gmail.com"
    },
]

console.log(user[1].email);


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('id'));


//Object de-Structure
const course = {
    courseName : "JS",
    price: 1000,
    courseInstructor: "Abhi"
}

// course.courseInstructor

const {courseInstructor: instructor} = course;
// console.log(courseInstructor);
console.log(instructor);



const navbar = ({company}) => {

}
navbar(company = "Abhishek")