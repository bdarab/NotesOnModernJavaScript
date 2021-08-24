// MOUSE EVENTS

// Targetting elements
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click event
// clearBtn.addEventListener('click', runEvent);
// Doule Click event
// clearBtn.addEventListener('dblclick', runEvent)
// Mousedown event
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup event
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter event
// card.addEventListener('mouseenter', runEvent);
// Mouseleave event
// card.addEventListener('mouseleave', runEvent);
// Mouseover event
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove event
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} - MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
