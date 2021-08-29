class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = new Date(dob) // Using built-in constructor Date()
  }
  // add greeting method
  greeting () {
    return `Hello There ${this.firstName} ${this.lastName}`
    // Any method ADDED INSIDE class GETS ADDED IN THE PROTOTYPE
    // thus 'Mary' 'Williams' is available inside the method as a 'new Person'
  }
  // add getAge method 
  getAge () {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  // add getMarried method
  getMarried (newLastName) {
    this.lastName = newLastName
  }
}

// eslint-disable-next-line no-unused-vars
const mary = new Person('Mary', 'Williams', '11-13-1980')

mary.getMarried('Thompson')

console.log(mary.getAge())

console.log(mary)