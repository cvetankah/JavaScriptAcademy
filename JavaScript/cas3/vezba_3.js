// 3. Imame niza od dnevni temperaturi, da se najde prosecnata temperatura za dadenite denovi

const temp = [12, 15, 14, 20, 22, 30] 
// let sum = 0

// for (let index = 0; index < temp.length; index++){
//     sum += temp[index]
// }

// console.log(sum / temp.length)

let sum = 0;

for (let i = 0; i < temp.length; i++) {
    sum += temp [i]
}

// if(temp.length) {console.log(0)} else
// console.log(sum / temp.lenth)

console.log(!temp.length ? 0 : sum / temp.length)

// 4. Imame valkana niza koja sto sodrzi razlicni tipovi na elementi, vklucuvajki i nedefinirani vrednosti
// Nedefinirani vrednosti bea null, undefined, '', 
// Da se kreira nova niza kade sto ke se smestat samo validnite vrednosti
// primer: valkanaNiza = [1, "test", null, 2, 4, undefined] ====> chistaNiza = [1, "test, 2, 4"]
// Na kraj novata niza da se ispecati

const valkanaNiza = [1, "test", null, 2,4, undefined]
const chistaNiza = []

for (let i = 0; i < valkanaNiza.length, i++) {
    if (valkanaNiza[i]) {
        chistaNiza.push(valkanaNiza[i])
    }
}

console.log(chistaNiza)