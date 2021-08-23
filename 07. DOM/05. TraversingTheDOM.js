/* eslint-disable no-irregular-whitespace */
/* eslint-disable prefer-destructuring */
let val;

const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

val = listItem
val = list

// GET CHILD

// Get child nodes
val = list.childNodes // NodeList (11)
val = list.childNodes[0] // #text
val = list.childNodes[0].nodeName
val = list.childNodes[0].nodeType // 3

/*
List and codes of type of node
------------------------------- 
1.Element
2.Attribute (deprecated)
3.Text node
8.Comment
9.Document itself
10.Doctype
*/


// Get children element nodes
val = list.children // HTML Collection (5)
val = list.children[0] // li.collection-item
val = list.children[0].textContent = 'Hello'

// Get Children of Children
val = list.children[3].children[0] // HTMLCollection [a.delete-item.secondary-content]
list.children[3].children[0].id = 'test-link' // a#test-link.delete-item.secondary-content

// firstChild
val = list.firstChild // #text node
val = list.firstElementChild // li.collection-item
list.firstElementChild.style.color = 'red'

// lastChild
val = list.lastChild // #text node
val = list.lastElementChild // li.collection-item

// Count
val = list.childElementCount // 5

// GET PARENTS

// Get parent node
val = listItem.parentNode // ul.collection
val = listItem.parentElement // ul.collection
val = listItem.parentElement.parentElement // div.card-action

// GET SIBLINGS
val = listItem.nextSibling // #text node
val = listItem.nextElementSibling // li.collection-item

// Get previous sibling
val = listItem.previousSibling
val = listItem.previousElementSibling 

console.log(val)