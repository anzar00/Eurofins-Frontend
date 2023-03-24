// OOP in JS
// Object Literals and Object Constructors


// Object Literals

let student = {
    name: "Jim",
    age: 13,
    
    phonenumber : {
        mobile: '1234567890',
        landline: '0987654321'
    },


    getdetails(){
        return (`${this.name} is ${this.age} years old  student.`)
    }
}

let teacher = {
    name: "John",
    age: 23,

    getdetails(){
        return (`${this.name} is ${this.age} years old teacher.`)
    }
}

let school = {
    name: "ABC School",
    location: "Mumbai",

    getdetails(){
        return (`${this.name} is located in ${this.location}.`)
    }
}

// Object Constructors

function Student(name, age){
    this.name = name
    this.age = age
}

let student1 = new Student("Jim", 13)

console.log(student1.name)



console.log(student.getdetails())
console.log(student.phonenumber.mobile)
console.log(teacher.getdetails())
console.log(school.getdetails())