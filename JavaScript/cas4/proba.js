const books = [
    {
        name: 'Harry Potter',
        author: 'J. K. Rowling',
        year: '2000',
    },
    {
        name: 'Crime and punishment',
        author: 'Fydor Doestoevsky',
        year: '1887',
    },
    {
        name: 'The art of war',
        author: 'San Tzu',
        year: '200',
    },
    {
        name: 'The Hobbit',
        author: 'J.R.R. Tolkein',
        year: '1910',
    }
]

// const listOfBooksILike = () => {
//     const information = document.getElementById('book_information')
//     const list = document.createElement("ul")
//     information.appendChild(list)

//     for (const book of books) {
//         const listItem = document.createElement("li")
//         listItem.textContent = ` ${book.name} (${book.year}) by (${book.author})`
//         list.appendChild(listItem)
//     }
    
// }

// listOfBooksILike()


const information = () => {
    const element = document.getElementById('book_informaion')
    const list = document.createElement('ul')
    element.appendChild(list)

    for (const book of books) {
        const listItem = document.createElement('li')
        listItem.textContent = `${book.name} (${book.year}) by (${book.author})`
        list.appendChild(listItem)
    }
}

information()

