/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-arrow-callback */
// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   // e.preventDefault();
//   console.log('Hello World');
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  // console.log('Clicked');

  // Checking Event Object (e)
  let val;

  val = e;

  // Event Target Element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // e.target.innerText = 'Hello';
  // Event Type
  val = e.type;
  // Timestamp
  val = e.timeStamp;
  // Coordinate of event relative to the window
  val = e.clientY;
  val = e.clientX;
  // Coordinate of event relative to the element itself
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
