
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

// let sum = temp[0]
// let minTemp = temp[0]
// let maxTemp = temp[0]

// for (let i = 0; i < temp.length; i++) {
//     sum += temp[i] 

//     if (temp[i] > maxTemp) {
//         maxTemp = temp[i]
//     }
//     if (temp[i] < minTemp) {
//         minTemp = temp[i]
//     }
// }

// console.log(!temp.length ? 0 : sum / temp.length)
// console.log(`Maximum temperature is: ${maxTemp}; Minimum temperature is: ${minTemp}`)


