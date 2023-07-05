
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

console.log("2d array -> ", pairs)

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

console.log("After flattening -> ", mergedArr)

let newTarget = 2 * target
let allCombos = []

findAllCombos(mergedArr, newTarget, 0, [], 0)

console.log("all combos -> ", allCombos)

function findAllCombos(arr, target, index, ans, sum) {
    // either add the current alement - arr[index] or skip it 
    if (index >= arr.length) {
        if (sum == target) {
            allCombos.push([...ans])
        }
        return;
    }

    ans.push(arr[index])
    findAllCombos(arr, target, index + 1, ans, sum); // current skip 
    ans.pop()
    findAllCombos(arr, target, index + 1, ans, sum + arr[index]); // take current element 
}

// function findAllCombos(arr, target, index, ans, sum) {
//     if (index >= arr.length) {
//         if (sum === target) {
//             allCombos.push(ans.slice()); // Create a new array by using slice() before pushing
//         }
//         return;
//     }

//     // Include current element
//     ans.push(arr[index]);
//     findAllCombos(arr, target, index + 1, ans, sum + arr[index]);
//     ans.pop();

//     // Skip current element
//     findAllCombos(arr, target, index + 1, ans, sum);
// }
