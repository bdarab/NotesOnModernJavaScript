/* TYPE CONVERSION */

let val;

// String() method

// Number to string
val = String(555);
val = String(4 + 4)

// Boolean to string
val = String(true)

// Date to string
val = String(new Date())

// Array to string
val = String([1, 2, 3, 4])

// toString() method

// Number to string
val = (5).toString()

//Boolean to string
val = (true).toString()

// Number() method

// String to numbers
val = Number('5')

val = Number('hello') // NaN

// Boolean to number
val = Number(false) // 0
val = Number(true) // 1

// Null to number
val = Number(null) // 0

// Array to number
val = Number([1, 2, 3, 4]) // NaN

// parseInt() method

// String to number
val = parseInt('100.30') // 100
val = parseFloat('100.33') // 100.33

// Output
console.log(val)
console.log(typeof val)
// console.log(val.length)
console.log(val.toFixed())


/* TYPE COERCION - JavaScript automatic conversion */

// const val1 = 5
// const val2 = 6
// const sum = val1 + val2

// console.log(sum) // 11
// console.log(typeof sum) // number

const val1 = '5'
const val2 = 6
const sum = val1 + val2

console.log(sum) // 56
console.log(typeof sum) // string