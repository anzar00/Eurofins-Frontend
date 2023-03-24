// Encapsulation

class student{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    addaddress(address){
        this.address = address
    }

    getdetails(){
        console.log(`Name is ${this.name}, Address is ${this.addaddress}.`)
    }
}

let student1 = new student("Jack", 23)
student1.addaddress('Mumbai')
student1.getdetails()