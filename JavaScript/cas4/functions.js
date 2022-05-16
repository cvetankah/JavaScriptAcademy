// deklaracija
function helloWorld (parametar1, parametar2) {
    //funkciite primaat parametri kako promenlivi definirani vo malie zagradi
    // function body (telo na funkcijata sto go sodrzi kodot)
    const zbir = parametar1 + parametar2
    // alert(zbir);
    // alert('Hello world!')

    return zbir
}

// povik
// tuka se definiraat vrednostite na parametrite
// parametrite sto se visok se ignoriraat
// helloWorld(12, 13, 45, 5, 6)

const value = helloWorld(12, 13)
// //arrow function:

const changeText = () => {
    // DOM object
    const element = document.getElementById('title')
    element.textContent = element.textContent + "My first exercise with functions"
    const list = document.createElement("ul")

const listItem = document.createElement("li")
listItem.textContent = "Hello world"

list.appendChild(listItem)
element.appendChild(list)
}