const name = 'John'
const age = 30
const job = 'Web Developer'
const city = 'Miami'

let html

// Without template literal (ES5) - Old Way
html = '<ul>' +
'<li>Name: ' + name + '</li>' +
'<li>Age: ' + age + '</li>' +
'<li>Job: ' + job + '</li>' +
'<li> City: ' + city + '</li>' +
'</ul>'

// With template literal (ES6) - new Way

function hello(){
  return 'hello'
}

html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
<li>${2+2}</li>
<li>${hello()}</li>
<li>${age >= 30 ? 'Old' : 'not too old'}</li>
</ul>
`


document.body.innerHTML = html
