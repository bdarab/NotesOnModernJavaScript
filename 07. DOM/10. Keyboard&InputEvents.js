/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
// INPUT EVENTS

// Target Elements
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5')
const select = document.querySelector('select')

// Clear Input Default Text
taskInput.value = '';
// Submit event
// form.addEventListener('submit', runEvent);

// KEYBOARD EVENTS

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keyup
// taskInput.addEventListener('keyup', runEvent)
// Keypress
// taskInput.addEventListener('keypress', runEvent)
// Focus
// taskInput.addEventListener('focus', runEvent)
// Blur
// taskInput.addEventListener('blur', runEvent)
// Cut
// taskInput.addEventListener('cut', runEvent)
// Paste
// taskInput.addEventListener('paste', runEvent)

// INPUT EVENT
taskInput.addEventListener('input', runEvent)
// RESPONSES TO ALMOST ALL OF THE INPUT EVENTS MENTIONED ABOVE MINUS FOCUS & BLUR

// Change event
select.addEventListener('change', runEvent)

function runEvent(e) {
  // e.preventDefault();
  console.log(`EVENT TYPE: ${e.type}`);

  // heading.textContent = e.target.value

  // console.log(e.target.value);
  // Get Input Value
  // console.log(taskInput.value);
}
