// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5]
const numbers2 = new Array(22, 45, 33, 76, 54)
const fruit =['Apple', 'Banana', 'Orange', 'Pear']
const mixed = [22, 'Hello', true, undefined, null, {a: 1, b: 2}, new Date()]

let val

// Get array length
val = numbers.length

// Check if is array
val = Array.isArray(numbers) // true
val = Array.isArray('hello') // false

// Get single value
val = numbers[3] // 23

// Replace value
numbers[2] = 99 // [43, 56, 99, 23, 44, 36, 5, 100]

// Find index of value
val = numbers.indexOf(44) // 4

/* ================================================
MUTATING ARRAY - CHNGES THE ARRAY TO A NEW ARRAY 
===================================================*/

// Insert value to end
val = numbers.push(100) // (8) [43, 56, 33, 23, 44, 36, 5, 100]

// Insert value to front
val = numbers.unshift(120) // (9) [120, 43, 56, 99, 23, 44, 36, 5, 100]

// Take off from end
val = numbers.pop() // 100
// (8) [120, 43, 56, 99, 23, 44, 36, 5]

// Take off from front
val = numbers.shift() // 120
// [43, 56, 99, 23, 44, 36, 5]

// Splice the values of array from 2nd index to 3 indexes
val = numbers.splice(1, 3) // numbers: [43, 44, 36, 5]- val: [56, 99, 23]

// Reverse array
val = numbers.reverse() // numbers reversed: [5, 36, 44, 43]

// Concatenate array
val = numbers.concat(numbers2) //(9) [5, 36, 44, 43, 22, 45, 33, 76, 54]

// sort array
val = fruit.sort() // (4) ["Apple", "Banana", "Orange", "Pear"]
val = numbers.sort() // sorted by the first number (7) [23, 36, 43, 44, 5, 56, 99]

// using compare function to sort numbers
val = numbers.sort(function(x, y){
  return x - y
})  // result sort() function above
// (7) [5, 36, 43, 44]

// using compare function to reverse sort numbers
val = numbers.sort(function(x, y){
  return y - x
}) // (4) [44, 43, 36, 5]

// Find
function under40(num){
  return num < 40
}
val = numbers.find(under40) // 36 (1st num under 40)

console.log(numbers)
console.log(val)