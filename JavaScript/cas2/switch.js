//Milk -40, Bread -20, Banana -10, Orange -3, Apple -6, Tomato -6
//+ - * / %

const product = "Smoki"

switch (product) {
    case 'Milk' : {
        console.log('The price of Milk is 40den.')
        break
    }
    case 'Bread' : {
        console.log('The price of Bread is 20den.')
        break
    }
    case 'Banana' : {
        console.log('The price of Banana is 10den.')
        break
    }
    case 'Orange' : {
        console.log('The price of Orange is 3den.')
        break
    }
    case 'Tomato' :
    case 'Apple' : {
        let variable = 'I am buying some tomatoes'
        console.log(variable)
        console.log('The price of the product is 6den.')
        break
    }
    default: {
        console.log('Unknown product')
        break
    }
}

const day = 'Friday'

switch (day.toLowerCase()) {
    case "monday" :
    case "tuesday" :
    case "wednesday" :
    case "thursday" :
    case "friday" : {
        console.log("It's a working day!")
    break
    }

    case "saturday" :
    case "sunday" : {
        console.log("It's the weekend!")
        break
     }

     default : {
         console.log('unknown day???')
     }
}

const broj = 25

if (broj % 5 === 0) {
    console.log('brojot e deliv so 5')
} else {
    console.log('brojot ne e deliv so 5')
}
