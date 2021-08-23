// // var, let, const

// var name = 'John Doe'
// console.log(name)
// name = 'Steve Smith'
// console.log(name)

// // init var
// var greeting;
// console.log(greeting)
// greeting = 'hello'
// console.log(greeting)

// // Declaring var can contain letters, numbers, _, $
// // Cannot start with numbers
// var 1name = 'John'
// var $name = 'John' // Global for jQuery
// var _name = 'John' // Global for private variables
// var name

// // multiple words var
// var firstName = 'John' // camelCase
// var first_name = 'John' // underscore
// var FirstName = 'John' // Pascal case
// var firstname // not recommended
// var firstName // recommended


// // LET
// let name
// name = 'John Doe'
// console.log(name)
// name = 'Steve Smith'
// console.log(name)

// CONST
const name = 'John'
console.log(name)

// Cannot reassign
// name = 'Sara' // Uncaught TypeError: Assignment to constant variable.

// Have to assign a value. Cannot init without one
// const Date // Uncaught SyntaxError: Missing initializer in const declaration

const person = {
  name: 'John',
  age: 12
}
console.log(person) /* {
  "name": "John",
  "age": 12
} */

// Values inside can be changed
person.age = 30
console.log(person) // {name: "John", age: 30}

const numbers = [1, 2, 3, 4]
console.log(numbers) // (4) [1, 2, 3, 4]
numbers.push(5)
console.log(numbers) // (5) [1, 2, 3, 4, 5]

// CANNOT BE REASSIGNED
numbers = [1, 2, 3, 4, 5, 6] // Uncaught TypeError: Assignment to constant variable.
