// const tekstualenBroj1 = prompt('insert number')
const broj1 = Number(prompt('insert 1st number'))

const broj2 = Number(prompt('insert 2nd number'))

const operation = prompt('Insert valid operation: +; -; *; /; %')

// const operation = "+" 

if (!broj1 || !broj2 && 0) {
    console.error('Invalid number')
} else {
    let rezultat
    // if (operation == '+') {
    //     // broj1 + broj2
    //     rezultat = broj1 + broj2
    // } else if (operation == '-') {
    //     rezultat = broj1 - broj2
    // } else if (operation == '*') {
    //     rezultat = broj1 * broj2
    // } else if (operation == '/') {
    //     rezultat = broj1 / broj2
    // } else if (operation == '%') {
    //     rezultat = broj1 % broj2
    // } 
    // if (!rezultat) {
    //     console.error('Invalid operation')
    // } else {
    //     console.log(rezultat)
    // }
    switch (operation) {
        case "+": 
          rezultat = broj1 + broj2
          break;
        case "-":
            rezultat = broj1 - broj2
            break
        case "*":
            rezultat = broj1 * broj2
            break
        case "/":
            rezultat = broj1 / broj2
            break
        case "%":
            rezultat = broj1 % broj2
            break
        default: 
            console.error("Invalid operation")
            break;
    }
    if (rezultat) {
        console.log(rezultat)
    }
} 

