
let input = [1, 3, 2, 2, -4, -6, -2, 8]
let target = 4

let pairs = [] // 2d array to store the pairs (x, y) where, x + y = target 
let hash = {}


for (let i = 0; i < input.length; i++) {
    let find = target - input[i];

    if (hash[find] == undefined) {
        // no element found
        hash[input[i]] = 1;
    }
    else {
        pairs.push([Math.min(input[i], find), Math.max(input[i], find)])
    }
}

console.log("2 d array ", pairs)

let mergedArr = pairs[0]

function merge(destination, input) {
    let i = 0, j = 0;

    while (i < destination.length && j < input.length) {
        if (destination[i] < input[j]) {
            i += 1;
        }
        else if (destination[i] > input[j]) {
            let temp = destination[i]
            destination[i] = input[j]
            input[j] = temp

            i += 1;
        }
        else {
            //same number
            i += 1;
        }
    }

    while (j < input.length) {
        destination.push(input[j])
        j += 1;
    }
}

for (let i = 1; i < pairs.length; i++) {
    merge(mergedArr, pairs[i])
}

console.log("after flattening ", mergedArr)