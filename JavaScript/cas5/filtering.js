const books = [
    {
        name: 'Harry Potter',
        author: 'J. K. Rowling',
        year: '2000',
        read: false
    },
    {
        name: 'Crime and punishment',
        author: 'Fydor Doestoevsky',
        year: '1887',
        read: true
    },
    {
        name: 'The art of war',
        author: 'San Tzu',
        year: '200',
        read: false
    },
    {
        name: 'The Hobbit',
        author: 'J.R.R. Tolkein',
        year: '1910',
        read: true
    }
]

const displayBooks = (isRead) => { //function display () {}
const content = document.getElementById('content')
let list = document.getElementById('list')
if (list)  {
    list.remove()
}

list = document.createElement('ul')
list.id = 'list' //list.setAttribute('id', 'list')
list.style = "padding: 0px; list-style-type: none"
content.appendChild(list)

    for (const book of books) {
        if (isRead === book.read) {
            const listItem = document.createElement('li');
            listItem.textContent = book.name
            list.append(listItem)
        }
}

}
function filterBooksByYear () {
    //immutability
   const filteredBooks = books.filter((book, index) => {
       //CALLBACK FUNCTION (PREDICATE)
       vo call back funkcijata definirame uslov
       //filter ja izminuva celata niza i za sekoj element proveruva dali go zadovoluva uslovot
       //site elementi sto go davoluvaat uslovot i vrakja vo noviot array (filterBooks)
       if (book.year < 2000) {
           return true
       }
       return false
        })

        console.log(filteredBokks)
}

filter(callback) {
    for (el of array) {
        callback(el)
    }
}

// const modifiedbooks = books.map((book, index) => {
//     return {...book, id: index, read: true}
// })

// console.log(modifiedBooks)

