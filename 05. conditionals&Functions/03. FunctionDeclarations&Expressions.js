/* eslint-disable no-console */

// FUNCTION DECLARATIONS
// We can declare default values for our parameters
// function greet (firstName = 'John', lastName = 'Doe') {
//   // console.log('Hello')
//   return `Hello ${firstName} ${lastName}`
// }

// Over-writes the default value
// console.log(greet('Steve', 'Martin'))

// FUNCTION EXPRESSIONS
// We could pass in default value
const square = (function (x = 3) {
  return x * x
})
console.log(square(5));

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS -- IIFEs
(function() {
  console.log('IIFE Ran..');
}());

// PROPERTY METHODS
const todo = {
  add() {
    console.log('Add todo ...')
  },
  edit (id) {
    console.log(`Edit todo ${id}`)
  }
}

todo.delete = function () {
  console.log('Delete todo ..')
}

todo.add()
todo.edit(22)
todo.delete()