// CONSTRUCTOR & 'THIS' KEYWORD

// Object literals
// const bina = {
//   name: 'Bina',
//   age: 63
// }

 // Constructor Function
 function Person (name, /*age*/ dob) {
  this.name = name
  // this.age = age
  // 'this' refers to the object in the scope.
  // console.log(this) // Here 'this' is the Person object
  this.birthday = new Date(dob)
  // a METHOD is a function created inside an object
  // getAge() function
  this.getAge = function() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}
// console.log(this) // Here 'this' is the Window object
//  // stantiate Person object
// const bina = new Person('Bina', 64)
// const john = new Person('John', 33)

const bina = new Person('Bina', '8-23-1957')

console.log(bina.getAge())
