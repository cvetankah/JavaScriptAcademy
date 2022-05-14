
function onsubmit () {
    event.preventDefault()
    const username = document.getElementsById('username').value
    const password = document.getElementsById('password')

    console.log(username, password)

}