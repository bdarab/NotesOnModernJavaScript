// Person constructor
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

// Greeting prototype method
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('John', 'Doe')

console.log(person1.greeting())

// customer constructor
function Customer (firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName)

  this.phone = phone
  this.membership = membership
}

// Inherit the Person prototype method
Customer.prototype = Object.create(Person.prototype)

// make customer.prototype return Customer()
Customer.prototype.constructor = Customer
// Create a customer
const customer1 = new Customer('Tom', 'Smith', '555-55-5555', 'Standard')

console.log(customer1)

// customer greeting
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`
}

console.log(customer1.greeting())
