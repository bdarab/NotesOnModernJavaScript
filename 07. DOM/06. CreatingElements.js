// Create Element
const li = document.createElement('li');

// Add Class
li.className = 'collection-item'

// add ID
li.id = 'new-item'
 
// add attribute
li.setAttribute('title', 'New Item')

//create text node & append
li.appendChild(document.createTextNode('Hello World'))

// create link element
const link = document.createElement('a')
// add class to link element
link.className = ('delete-Item secondary-content')
// add HTML
link.innerHTML = `<i class="fa fa-remove"></i>`
// append to li
li.appendChild(link)

// append li as child to ul
document.querySelector('.collection').appendChild(li)


console.log(li)