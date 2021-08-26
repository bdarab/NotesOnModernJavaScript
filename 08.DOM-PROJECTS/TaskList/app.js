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
