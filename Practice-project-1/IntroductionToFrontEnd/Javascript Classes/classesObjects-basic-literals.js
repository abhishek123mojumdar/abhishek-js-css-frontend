let nam = 'abhishek'
console.log(nam.toUpperCase())
console.log(typeof nam)

let nameObj = new String('abhishek')
console.log(nameObj.toUpperCase())
console.log(typeof nameObj)

// console.log(nam == nameObj) // true
// console.log(nam === nameObj) // false


// nam here is a primitive dataType and hence has the type as string 
// but nameObj as it is created using new String () that is a constructor function a string object will be created 
// Although the output/ value will be same but the type of the variable
// will not be same . 

let human1 = {
    name : 'Abhishek',
    age : 29,
    orgranization: 'Dell EMC',
    getDetails : function () {
        return `${this.name} who is of age ${this.age} works in an organization called ${this.orgranization}`
    }
}

let human2 = {
    name : 'Jaideep',
    age : 29,
    orgranization: 'Cisco',
    getDetails : function () {
        return `${this.name} who is of age ${this.age} works in an organization called ${this.orgranization}`
    }
}

// console.log(human1.getDetails())
// console.log(human2.getDetails())

// Both objects have the same structure, same functionality but the values corresponding to the keys 
// are different in both the objects

// console.log(Object.values(human1))
// console.log(Object.values(human1))
// console.log(Object.keys(human1))
// console.log(Object.keys(human1))

//Object.values and keys gives us a list of all the values and keys of an object 

