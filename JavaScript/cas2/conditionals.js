//logicki iskazi i uslovno izvrsuvanje na kod, logcki operatori

// console.log("test")

// alert("test")

// const text = prompt("vnesi vrednost")

//logicki operatori

// ">" "<" ">=" "=<" "!" "==" "!="

//hardcoded
const vnes1 = prompt("vnesi prva vrednost")
const vnes2 = prompt("vnesi vtora vrednost")

if (!vnes1 || !vnes2) {
    //GRESKA - nevaliden broj
} else {

    const a = Number(vnes1)
    const b = Number(vnes2)

    console.log(a)

    //uslov (if-statement)
    if (a < b) {
        //kodot sto treba da se izvrsi dokolku uslovot e ispolnet
        console.log(a + 'e pomalo od' + b)
} else if (a>b) {
console.log(a + 'e pogolmo od' + b)
} else { //kodot sto ke se izvrsi dokolku nieden od gornite uslovi ne e ispolnet
console.log(a + 'e ednakvo na' + b) }
}


cost broj1 = 7
const broj2 = 20


//&& - logicko I
// || logicko ili
if(broj1<10){
    console.log("brojot e ednocifren")
}

const username = prompt ("Vnesete korisnicko ime")
const password = prompt ("Vnesete password") // null ako na promptot pritisneme cancel
console.log(password)

let broj = 15
const delivSoDva = broj % 2  == 0
const delivSoPet = broj % 5 == 0
const pogolemOdDeset = broj > 10

if ((delivSoDva || delivSoPet) && pogolemOdDeset) {
    console.log("poraka")
}

if (!password) {
    console.log("Ve molime vnesete validen password")
}