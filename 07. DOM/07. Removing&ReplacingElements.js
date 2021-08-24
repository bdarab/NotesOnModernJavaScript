/* eslint-disable prefer-destructuring */
// REPLACING ELEMENTS

// Create Element
const newHeading = document.createElement('h2');
// add ID
newHeading.id = 'task-title';
// Create new text node & append it
newHeading.appendChild(document.createTextNode('Task List'));
// Set the old heading
const oldHeading = document.getElementById('task-title');
// Get Parent
const cardAction = document.querySelector('.card-action');
// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENTS

// Targeting li & ul elements
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');
// Remove list item
lis[0].remove();
// Remove child element
list.removeChild(lis[3]);

// CLASSES AND ATTRIBUTES

// Targetting first child element
const firstLi = document.querySelector('li:first-child'); // first-child ia an 'a' tag

const link = firstLi.children[0];

let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
val = link.classList[1];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);
