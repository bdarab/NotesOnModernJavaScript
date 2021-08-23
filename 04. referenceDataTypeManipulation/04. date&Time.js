/* eslint-disable no-console */
let val

const today = new Date()

let birthday = new Date('9-10-1981 11:25:00')
birthday = new Date('September 10 1981 11:25:00')
birthday = new Date('9/10/1981 11:25:00')

val = today // Thu Aug 19 2021 00:01:44 GMT+0200 (Central European Summer Time)
val = birthday


/* -------
  GETTERS
---------- */
// Get month
val = today.getMonth() // 7 Meaning August it is zero based

// Get the day of the month
val = today.getDate() // 19

// Get Day of the week
val = today.getDay() // 4 Thurseday, Sunday = 0

// Get Year
val = today.getFullYear() // 2021

// Get hours
val = today.getHours() // 0 meaning 12:00 midnight

// Get minutes
val = today.getMinutes() // 1 minute

// get seconds
val = today.getSeconds() // 14 seconds

// get miliseconds
val = today.getMilliseconds() // 238

// get timestamp
val = today.getTime() // 1629327923152

console.log(val)

/* -------
  SETTERS
---------- */
// set month
birthday.setMonth(2) // Tue Mar 10 1981 - zero based

// set date
birthday.setDate(12) // Thu Mar 12 1981

// set year
birthday.setFullYear(1986) // Wed Mar 12 1986

// set hour
birthday.setHours(11) // Wed Mar 12 1986 11:25:00 GMT+0100 

// set minutes
birthday.setMinutes(45) // Wed Mar 12 1986 11:45:00 GMT+0100

// set seconds
birthday.setSeconds(23) // Wed Mar 12 1986 11:45:23 GMT+0100


console.log(birthday)