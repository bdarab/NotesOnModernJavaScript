/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */

// Define UI Variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners()

// Load all event listeners function
function loadEventListeners(){
  // Add task event
  form.addEventListener('submit', addTask)

  // the delete element is multiple and dynamic, so we MUST USE EVENT DELEGATION targeting taskList(UL)

  // remove task event
  taskList.addEventListener('click', removeTask)

}


// Add Task Function
function addTask (e) {
  if (taskInput.value === '') {
    alert('Add a task')
  }
  // Creating li Element
  const li = document.createElement('li')
  li.className = 'collection-item'
  li.appendChild(document.createTextNode(taskInput.value))
  // create new link element
  const link = document.createElement('a')
  link.className = 'delete-item secondary-content'

  ///add delete icon
  link.innerHTML = '<i class="fa fa-remove"></i>'

  // append the link to li
  li.appendChild(link)

  // append li to ul
  taskList.appendChild(li)

  // clear input
  taskInput.value = ''

  e.preventDefault()
}

// Add removeTask function
function removeTask (e) {
  /* Comment above: the delete element is multiple and dynamic, so we MUST USE EVENT DELEGATION targeting taskList(UL) */
  // must target specific element in taskList(UL), namely the X icon
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove()
    }
 }
  e.preventDefault()
}
