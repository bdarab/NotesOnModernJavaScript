const personPrototypes = {
  // eslint-disable-next-line object-shorthand
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`
  },
  // eslint-disable-next-line object-shorthand
  getMarried: function (newLastName) {
    this.lastName = newLastName
  }
}

const mary = Object.create(personPrototypes)
mary.firstName = 'Mary'
mary.lastName = 'Williams'
mary.age = 30

mary.getMarried('Thompson')

console.log(mary.greeting())

const brad = Object.create(personPrototypes, {
  firstName: { value: 'Brad' },
  lastName: { value: 'Traversy' },
  age: { value: 36 }
})

console.log(brad)

console.log(brad.greeting())