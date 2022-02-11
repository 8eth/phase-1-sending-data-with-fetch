// Add your code here
const body = document.querySelector('body')

function submitData (name, email) {
    return fetch ('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })

    .then (res => res.json())

    .then (function(userObj) {
        const div = document.createElement('div')
        div.textContent = userObj.id
        body.appendChild(div)
    })
    
    .catch (function() {
        const li = document.createElement('li')
        li.textContent = 'Unauthorized Access'
        body.appendChild(li)
    })
}