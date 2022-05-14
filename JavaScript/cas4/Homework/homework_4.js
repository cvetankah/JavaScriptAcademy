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

for (let book of books) {
    // ISTO SO - for (let i = 0; i < boks.lenth; i++) {let book = books[i]}
    (book.read) && console.log(book.name) // shorhand za if clause
    } 

const value = booksIHaveRead

const changeText = () => {
    // DOM object
    const element = document.getElementById('title')
    element.textContent = element.textContent + "Books I have read"
    const list = document.createElement("ul")

const listItem = document.createElement("li")
listItem.textContent = "Books I have read"

list.appendChild(listItem)
element.appendChild(list)
}