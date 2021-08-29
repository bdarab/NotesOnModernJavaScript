/* eslint-disable max-classes-per-file */
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  greeting () {
    return `Hello there ${this.firstName} ${this.lastName}`
  }
}

class Customer extends Person{
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName)

    this.phone = phone
    this.membership = membership
  }
  // create a STATIC (stand-alone) METHOD
  static getMembershipCost () {
    return 500
  }
}

const john = new Customer('John', 'Doe', '555-55-5555', 'Standard')

console.log(john.greeting()) /* Hello there John Doe - THAT IS POSSIBLE BCZ A METHOD IS INHERITED BY SUB-CLASS FROM A CLASS */

console.log(Customer.getMembershipCost()) // Since the method is STATIC we must use the class to call it

/* CAN NOT USE SUB-CLASS SPECIFIC METHOD IN THE CLASS - CLASS DOES NOT INHERIT FROM SUB-CLASS */
console.log(Person.getMembershipCost())
// Uncaught TypeError: Person.getMembershipCost is not a function