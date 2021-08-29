/* eslint-disable no-prototype-builtins */
// All objects literals inherit from object.prototype
// Object created by constructor inherits from the object constructed by it such as Person.prototype

 // Constructor Function
 function Person (firstName, lastName, dob) {
  this.firstName = firstName
  this.lastName = lastName
  this.birthday = new Date(dob)
  // this.calculateAge = function() {
  //   const diff = Date.now() - this.birthday.getTime()
  //   const ageDate = new Date(diff)
  //   return Math.abs(ageDate.getUTCFullYear() - 1970)
  // }
}

// Calculate age (prototype method to get data)
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime()
  const ageDate = new Date(diff)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// Get full name (prototype method to get data)
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// Gets Married (Prototype method to manipulate data)
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName
}


// stantiate new person
const john = new Person('John', 'Doe', '8-12-90')
const mary = new Person('Mary', 'Johnson', 'March 20 1987')

console.log(mary)
console.log(john.calculateAge())

console.log(mary.getFullName())

mary.getsMarried('Smith')
console.log(mary.getFullName()) // Mary Smith & getsMarried is added to Person prototype

console.log(mary.hasOwnProperty('firstName')) // true - specific property to mary
console.log(mary.hasOwnProperty('getFullName')) // false - not a specific property to mary
