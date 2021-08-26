/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-alert */

// DEFINE UI VARIABLES
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// LOAD ALL EVENT LISTENER
loadEventListeners()

// LOAD ALL EVENT LISTENER FUNCTION
function loadEventListeners(){
  // Add task event
  form.addEventListener('submit', addTask)

  // the delete element is multiple and dynamic, so we MUST USE EVENT DELEGATION targeting taskList(UL)

  // remove task event
  taskList.addEventListener('click', removeTask)

  // clear tasks event
  clearBtn.addEventListener('click', clearTasks)

  // filter tasks event
  filter.addEventListener('keyup', filterTasks)
}


// ADD TASK FUNCTION
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

// REMOVE TASK FUNCTION
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

// CLEAR TASKS FUNCTION
function clearTasks (e) {
  // setting HTML to empty
  // taskList.innerHTML = ''

  // faster way is to loop through the items 
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)

    // ARTICLE: showing the difference between the 2 methods https://coderwall.com/p/nygghw/don-t-use-innerhtml-to-empty-dom-elements
}
  e.preventDefault()
}

// FILTER TASKS FUNCTION
function filterTasks (e) {
  const text = e.target.value.toLowerCase()

  /* forEach method can be used because querySelector() returns a NODE LIST while other methods of getElementBy...() will return HTML COLLECTIONS which must be converted to an array in order to use forEach() method */
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })

  e.preventDefault()
}