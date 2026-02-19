function sumOfTripledEvens(inputArray) {
    let evens = inputArray.filter((item) => {
        return item % 2 === 0;
    })
    let tripled = evens.map((item) => item * 3)

    let sum = tripled.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0);
    return sum;
}

input = [1, 2, 3, 4, 5]

// console.log(sumOfTripledEvens(input));

function sumArray(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

function getMaxSubSum(inputArray) {
    let result = 0;
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i+1; j < inputArray.length; j++) {
        candidates.push(sumArray(inputArray.slice(i, j)))
        }
    }
    return result;
}

console.log(getMaxSubSum([1, 2, 3]));