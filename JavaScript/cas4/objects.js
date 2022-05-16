// const person = {
//     // object properties (svojstva)
//     pol: 'maski', 
//     vozrast: 20,
//     visina: 170, 
//     tezina: 70,
//     student: true
// }

// //kreiranje na kopija od objekt
// const nov = {...person}

// // key value pairs
// person.pol = 'zenski'
// delete person.tezina
// person.ime = 'Cvetanka' // person['ime] - 'Cvetanka'

// console.log(person)
// console.log(nov)

// const keys = Object.keys(person) // gi vrakja site klucevi od objektot kako array
// console.log(keys)

// const values = Object.values(person)
// console.log(values)

// const Kvadrat = {
//     sirina:10,
//     dolzina:20

// }

// Kvadrat.plostina = Kvadrat.sirina * Kvadrat.dolzina
//     console.log(Kvadrat)

// const books = [
//     {
//         name: 'Harry Potter',
//         author: 'J. K. Rowling',
//         year: '2000',
//         read: false
//     },
//     {
//         name: 'Crime and punishment',
//         author: 'Fyodor Doestoevsky',
//         year: '1887',
//         read: true
//     },
//     {
//         name: 'The art of war',
//         author: 'San Tzu',
//         year: '200',
//         read: false
//     },
//     {
//         name: 'The Hobbit',
//         author: 'J.R.R. Tolkein',
//         year: '1910',
//         read: true
//     }
// ]

// for (let book of books) {
// // ISTO SO - for (let i = 0; i < boks.lenth; i++) {let book = books[i]}
// (book.read) && console.log(book.name + ' ' + 'by' + ' ' + book.author) // shorhand za if clause
// }  

// // books.forEach(functuion, {book})

let avgMath = 0
let avgPhysics = 0
let avgChemistry = 0

const students = [
    {
        id: 1,
        name: 'Koco',
        grades: {
            math: 6,
            physics: 7, 
            chemistry: 8
        }
    }, 
    {
        id: 2,
        name: 'Gjorgji', 
        grades: {
            math: 9,
            physics: 8, 
            chemistry: 10
        }
    },
    {
        id: 3,
        name: 'Sanja',
        grades: {
            math: 7,
            physics: 7, 
            chemistry: 7
        }
    }
]

for (let student of students) {
    avgMath = student.grades.math + avgMath
    avgPhysics = student.grades.physics + avgPhysics
    avgChemistry = student.grades.chemistry + avgChemistry
}

console.log('Srednata ocenka po matematika e: '+ avgMath / students.length)
console.log('Srednata ocenka po fizika e: '+ avgPhysics / students.length)
console.log('Srednata ocenka po hemija e: '+ avgChemistry / students.length)
    
