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
        name: 'Cloud Atlas',
        author: 'George Mitchell',
        year: '2004',
        read: false
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
    generateHTMLList(books.filter((book) => { return book.read === isRead ? true : false}))
    }

    // implicit return: 
    // const displayBooks = (isRead) => { //function display () {}
//     generateHTMLList(books.filter((book) => {book.read === isRead ? true : false}))
// } 
// dokolku samo imate edna linija return statement, ne mora da pisuvate golemi zagradi kaj funkcijata
// i ne mora da pisuvate return 

function filterBooksByYear () {
    // immutability = koga dobivas druga niza, bez pritoa da ja izbrises ili smenis veke postoeckata
    const filteredBooks = books.filter((book, index) => {
        //callback function kako predicate
        //vo callback funkcijata deifnirame uslov
        //filter ja ziminuva celata niza i za sekoj element proveruva dali go zadovoluva uslovot
        //site elementi sto go zadovoluvaat uslovot, gi vraka vo noviot array (vo nasiot slucaj filteredBooks)
        if (book.year < 2000) {return true
        }
        return false
    })

    // console.log(filteredBooks)
    generateHTMLList(filteredBooks)
}

function generateHTMLList (arrayOfBooks) {
    const content = document.getElementById('content')
    let list = document.getElementById('list')
    if (list) {
        list.remove()
    }

    list = document.createElement('ul')
    list.id = 'list' // list.setAttribute('id', 'list')
    list.style = "padding: 0px; list-style-type: none";
    content.appendChild(list)

        for (const book of arrayOfBooks) {
                const listItem = document.createElement('li')
                listItem.textContent = `${book.name} (${book.year} - (${book.author})`
                list.append(listItem)
        }
}


// function filterBooksByYear () {
//     //immutability
//    const filteredBooks = books.filter((book, index) => {
//        //CALLBACK FUNCTION (PREDICATE)
//        vo call back funkcijata definirame uslov
//        //filter ja izminuva celata niza i za sekoj element proveruva dali go zadovoluva uslovot
//        //site elementi sto go davoluvaat uslovot i vrakja vo noviot array (filterBooks)
//        if (book.year < 2000) {
//            return true
//        }
//        return false
//         })

//         console.log(filteredBokks)
// }

// filter(callback) {
//     for (el of array) {
//         callback(el)
//     }
// }

const modifiedBooks = books.map((book, index) => {
    if (book.year === 2000) {
        return {...book, id: index + 1, read: true}
    }
    return {...book, id:index + 1}
})

console.log(modifiedBooks)

