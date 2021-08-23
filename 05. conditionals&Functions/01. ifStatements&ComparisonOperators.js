/* eslint-disable no-console */
/* ****************
 if statement syntax
 **************** */
// if (condition) {
//   do something
// } else {
//   do something else
// }

const id = 100

// //Equal to
// if(id == 100) {
//   console.log("correct")
// } else {
//   console.log("incorrect")
// }

// //Not equal to
// if(id != 101) {
//   console.log("correct")
// } else {
//   console.log("incorrect")
// }

// //Equal to value and type
// if(id === 100) {
//   console.log("correct")
// } else {
//   console.log("incorrect")
// }

// //Not equal to value and type
// if(id !== 100) {
//   console.log("correct")
// } else {
//   console.log("incorrect")
// }

// Test if variable is undefined
// if(typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`)
// } else {
//   console.log('No ID')
// }

// // Greater than
// if(id >= 100) {
//   console.log('correct')
// } else {
//   console.log('incorrect')
// }

// // Less than
// if(id <= 99) {
//   console.log('correct')
// } else {
//   console.log('incorrect')
// }

// If else statement
// const color = 'yellow'

// if (color === 'red') {
//   console.log('Color is red')
// } else if (color === 'blue' ) {
//   console.log('Color is blue')
// } else {
//   console.log('Color is not red or blue')
// }

// Logical operators

const name = 'Steve'
const age = 20

// And &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`)
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`)
} else {
  console.log(`${name} is an adult`)
}

// Or ||
if (age > 65 || age < 16) {
  console.log(`${name} can not run in the race`)
} else {
  console.log(`${name} is registered for the race`)
}

// Ternary Operator
console.log(id === 100 ? 'correct' : 'incorrect')

// Curly braces are optional in JS
if(id === 100) 
  {console.log("correct")}
else 
  {console.log("incorrect")}
