/* eslint-disable no-alert */
/* eslint-disable no-console */

/* WINDOW METHODS / OBJECTS / PROPERTIES */

// window.console.log(123) // window is not necessary, it is global object

// //Alert
// alert('Hello World!');

// // Prompt
// const input = prompt()
// alert(input)

// // Confirm
// if (confirm('Are you sure?')) {
//   console.log('YES')
// } else {
//   console.log('NO')
// }

let val;

// Outer height and width
val = window.outerHeight
val = window.outerWidth

// Inner height and width
val = window.innerHeight
val = window.innerWidth

// Scroll points
val = window.scrollX
val = window.scrollY

// LOCATION OBJECT
val = window.location
val = window.location.hostname
val = window.location.port
val = window.location.href
val = window.location.search

// // Redirect
// window.location.href = 'http://google.com'
// // Reload
// window.location.reload()

// HISTORY OBJECT
// window.history.go(-2)
// val = window.history.length

// NAVIGATOR OBJECT
val = window.navigator
val = window.navigator.appName
val = window.navigator.appVersion
val = window.navigator.userAgent
val = window.navigator.platform
val = window.navigator.vendor
val = window.navigator.language

console.log(val)