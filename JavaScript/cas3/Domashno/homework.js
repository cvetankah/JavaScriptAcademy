
const temp = [12, 15, 14, 20, 22, 30]
let sum = 0
let high = temp[0]
let low = temp[0]

for (let index = 0; index < temp.length; index ++) {
    sum += temp[index]
}

console.log(sum / temp.length)


for (let i = 0; i < temp.length; i++) {
    high = Math.max(high, temp[i]); 
    low = Math.min(low, temp[i])
}

console.log("Maximum is" + ' ' + high)
console.log("Minimum is" + ' ' + low)

// const temp = [12, 15, 14, 20, 22, 30]
// let sum = 0
// let high = temp[0]
// let low = temp[0]

// for (let index = 0; index < temp.length; index ++) {
//     sum += temp[index]
// }

// console.log(sum / temp.length)


// for (let i = 0; i < temp.length; i++) {
//     high = i > temp[i]; 
//     low = i < temp[i]
// }

// console.log("Maximum is" + ' ' + high)
// console.log("Minimum is" + ' ' + low)


