const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@aol.com',
    hobbies:['music', 'sports'],
    address: {
      city: 'Miyami',
      state: 'Florida'
    },
    getBirthYear: function(){
      return 2017 - this.age
    }
  }
  
  let val
  
  val = person // {firstName: "Steve"}
  
  // Get specific value
  val = person.firstName // Steve
  val = person['lastName'] // Smith
  val = person.age // 30
  val = person.hobbies // (2) ["music", "sports"]
  val = person.hobbies[0] // music
  val = person.address // {city: "Miyami", state: "Florida"}
  val = person.address.city // Miyami
  val = person.address['state'] // Florida
  val = person.getBirthYear() // 1987
  
  
  console.log(val) 
  
  const people = [
    {
      name: 'Bob',
      age: 20
    },
    {
      name: 'Alen',
      age: 36
    },
    {
      name: 'Salar',
      age: 64
    }
  ]
  for(i = 0; i < people.length; i++){
    console.log(people[i].name)
  }