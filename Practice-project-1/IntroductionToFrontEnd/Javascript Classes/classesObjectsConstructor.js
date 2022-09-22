function Human(name , age , organization , salary) {
    this.name = name
    this.age = age
    this.organization = organization
    this.salary  = salary
    // this.getDetails = function getDetails () {
    //     return `${this.name} who is of age ${this.age} works in an organization called ${this.organization}`
    // }
}

// This is the way of creating a constructor function ,  the positives of creating a constructor function is 
// that we do not need to write the same code again and again . We can use the same code to cater to our requirements 


Human.prototype.getDetails = function () {
    return `${this.name} who is of age ${this.age} works in an organization called ${this.organization}`
}

Human.prototype.salaryDetails = function () {
    return `${this.name} has a salary of ${this.salary}`
}
    
Human.prototype.updateSalary = function (salary) {
    this.salary = salary
    return `${this.name} has an updated salary of ${this.salary}`
}

// the above is the way of using prototype, this will embed the function in the blueprint of the object , i.e
// whenever any object is created using this constructor function it will have access to both the methods above
    

let abhishek = new Human ('Abhishek' , 29 , 'Dell',1000)
let Jaideep = new Human ('Jaideep',29,'Cisco',3000)

console.log(abhishek.getDetails())
console.log(Jaideep.getDetails())
console.log(abhishek.salaryDetails())
console.log(Jaideep.salaryDetails())
console.log(Jaideep.updateSalary(8000))

