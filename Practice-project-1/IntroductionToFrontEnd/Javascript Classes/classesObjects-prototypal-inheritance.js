// What is prototypal inheritance ? 
// This is a way in which an object inherits methods and properties from another object 
// Let say there is an object called employee which has basic properties like  organization , building , area
// We want to create 2 more employees 'abhishek' , 'jaideep' who have added qualities like musician and cricketer
// In such cases we would need prototypal inheritance to use the baisc features of the employee object  

// In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. 
// That object is called “a prototype”:
// When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”


let employee = {
    organization  : 'Dell',
    building : 'Aquamarine',
    area : 'Mahadevpura',
    getDetails : function () {
        return `${this.organization} is in area  ${this.area}`
    }
}

let abhishek = {
    name : 'Abhishek',
    salary : 1000,
    hobby:'Cricket',
    __proto__ : employee
}

let Jaideep = {
    name : 'Jaideep',
    salary : 2000,
    hobby:'Music',
    __proto__ : employee
}

console.log(abhishek.hobby)


// Prototype chaining 

let animal = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };

  let rabbit = {
    jumps: true,
    __proto__: animal
  };

  console.log('-------------')
  console.log(rabbit)
  
  let longEar = {
    earLength: 10,
    walk : () => {
      console.log('I am rabbit')
    },
    __proto__: rabbit
  };

  let obj = new Object()
  // longEar.walk = function () {
  //   console.log('Yo! Wassup')
  // }

  console.log('obj')
  console.log(longEar)
  console.log(longEar.earLength.toString())
  longEar.walk()
//   longEar.walk = function () {
//     alert('Long ear is walking ')
//   }

/* an object priortizes its immediate object property . Once it does not find it in its immediate property then it goes inside the prototype chain*/
  
  // walk is taken from the prototype chain
  ; // Animal walk
  //console.log(longEar.jumps); // true (from rabbit)

  

//Prototypal inheritance with constructor function 

function Human(name , age , salary) {
    this.name = name
    this.age = age
    this.salary  = salary
}


Human.prototype.getDetails = function () {
    return `${this.name} who is of age ${this.age} has a salary ${this.salary}`
}


function Employee ( name , age , salary , organization) {
    Human.call(this, name , age , salary)
    this.organization = organization
}

Employee.prototype = Object.create(Human.prototype)

let emp = new Employee('Abhishek', 29, 1000 , 'Dell')
console.log(emp)

//Object.create is also a way to create an object .  

let humanProto = {
  getDetails : function () {
    return `${this.name} who is of age ${this.age} has a salary ${this.salary}`
},
getAge : function () {
  return `The age is ${this.age}`
}
}

// The above gets set as prototype


let humanObject  = Object.create(humanProto , {
  age : {value : 29 },
  name : {value : 'Abhishek' },
  salary : {value : 1000 },
})


console.log(humanObject)