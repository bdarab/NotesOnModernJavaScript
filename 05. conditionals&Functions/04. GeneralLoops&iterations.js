/* eslint-disable guard-for-in */
/* eslint-disable no-console */

// FOR LOOP
// for (let i = 0; i < 10; i++){
//   if (i === 2) {
//     console.log('2 is my favorite number')
//     continue
//   }

//   if (i === 5) {
//     console.log('Stop the loop')
//     break
//   }
//   console.log(`number ${i}`)
// }

// WHILE LOOP
// let i = 0
// while (i < 10) {
//   console.log(`Number ${i}`)
//   i++
// }

// DO WHILE
// let i = 100
// do {
//   console.log(`Number ${i}`)
//   i++
// }
// while(i<10)

// LOOPING ARRAYS
// const cars = ['Ford', 'Chevy', 'VW', 'Opel']
// for (let i = 0; i < cars.length; i++){
//   console.log(cars[i])
// }

// forEach LOOP
// cars.forEach((car, index, array) => {
//   console.log(`${index} : ${car}`)
//   console.log(array)
// })

// MAP METHOD
// const users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'David' },
//   { id: 3, name: 'Jane' }
// ]

// const ids = users.map((user) => user.id)
// console.log(ids)

// FOR IN LOOP
const user = 
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
  }

  for(const x in user) {
    console.log(`${x} : ${user[x]}`)
  }