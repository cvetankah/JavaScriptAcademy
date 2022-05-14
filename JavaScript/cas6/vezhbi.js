//storage - mehanizam za zacuvuvanje na podatoci

localStorage.setItem('ime', 'Koco')
// localStorage.getItem('ime')
//vrakja vrednost sto moze da se zapise kako promenliva: Na pr:
const ime = localStorage.getItem('ime')
console.log(ime)
// localStorage.removeItem('ime')
// localStorage.clear()

// sessionStorage.setItem()

const book = {
    name: 'Crime and punishment',
    author: "Fyodor Dostoevski",
    year: 1887,
    read: true
}

const bookAsJason = JSON.stringify([book])
console.log(book)
console.log(bookAsJason)

localStorage.setItem('books', bookAsJason)
// alert(bookAsJason)


//animal = {type: "ovci", numOfAnimal: "30"}
// const animals = []

const addAdnimals = () => {
    const animalType = document.getElementById('abunalType')
    const numOfAnimal = document.getElementById('numOfAnimal')

    //guard clause
    if (animalType.value || !numOfAnimal.value) {
        alert("Please unsert the animal type and the number of specimens")
        return
    }

    //make a new animal object to be inserted in the local storage
    const newAnimal = {
        type: animalType.value.toLowerCase(),
        number: numOfAnimal.value
    }

    //check if the animal array exists(when the app is loaded for the first time, the list does not exist )
    let animals = localStorage.getItem('animals')
    if (!animals) {
        animals = []
    } else {
        //we need to convert the string variable to array in order to push new items
        animals = JSON.parse(animals)
    }

    let animalAlreadyExists = false
    //proverka dali veke postoi toj tip na zivotno
    animals = animals.map(animal => {
        if (animal.type === newAnimal.type) {
            return { ...animal, number: Number(animal.number) + Number (newAnimal.number)}
        }
        return animal
    })

    //add the new animals in the list
    if (!animalAlreadyExists) {
        animals = [...animals, newAnimal] //animals.push(newAnimal)

    }
    
    //add the modified list back into the local storage
    localStorage.setItem('animals', JSON.stringify(animals))
}

