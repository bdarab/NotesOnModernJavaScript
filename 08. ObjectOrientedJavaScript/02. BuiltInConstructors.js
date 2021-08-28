/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-unused-vars */

// THIS WAY IS NOT RECOMMENDED

// PRIMITIVE TYPES

// String
const name1 = 'Bina'
// Above string could be created as an OBJECT by Calling STRING CONSTRUCTOR
const name2 = new String('Bina') 
// Since name2 is an object, we van add vlues to it
name2.age = 24

console.log(typeof name1) // string
console.log(typeof name2) // object
console.log(name2) // String {"Bina", age: 24}

// number
const num1 = 20
const num2 = new Number(20)
num2.msg = 'Hello World'

console.log(typeof num1) // number
console.log(typeof num2) // object
console.log(num2) // Number {20, msg: "Hello World"}

// boolean
const bool1 = true
const bool2 = new Boolean(true)
bool2.msg = 'Hello World'

console.log(typeof bool1) // boolean
console.log(typeof bool2) // object
console.log(bool2) // Boolean {true, msg: "Hello World"}

// REFERENCE TYPES

// Function
const getSum1 = function (x, y) {
  return x + y
}
// eslint-disable-next-line no-new-func
const getSum2 = new Function ('x', 'y',' return 1 + 2')
  
console.log(getSum1(1, 2)) // 3
console.log(getSum2()) // 3

// Object
const obj1 = { name: 'John' }
const obj2 = new Object({ name: 'John' })

console.log(obj1) // {name: "John"}
console.log(obj2) // {name: "John"}

// Arrays
const myArr1 = [1, 'Bina', 2, 3]
const myArr2 = new Array(1, 'Bina', 2, 3)

console.log(myArr1) // (4) [1, "Bina", 2, 3]
console.log(myArr2) // (4) [1, "Bina", 2, 3]

// Regular Expressions
const re1 = /\w+/ // /\w+/
const re2 = new RegExp('\\w+') // /\w+/

console.log(re1)
console.log(re2)

