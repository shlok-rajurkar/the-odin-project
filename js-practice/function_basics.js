function main() {
    const x = getX();
    const n = getN();
    alert(calcPow(x, n));
}

function getX() {
    return(Number(prompt("Enter X:")))
}

function getN() {
    return(Number(prompt("Enter N:")))
}

function calcPow(x, n) {
    if (x == NaN || n == NaN) {
        return "Invalid input(s) provided."
    }
    let result = x;
    for (i = 0; i < n - 1; i++) {
        result = result * x;
    }
    return result;
}

// main();

function add7(num) {
    return num + 7;
}

console.log(add7(10));

function multiply(x, y) {
    return x * y;
}

console.log(multiply(2, 3))

function capitalize(stringInput) {
    let result = stringInput.toLowerCase();
    return result.slice(0, 1).toUpperCase() + result.slice(1);
}

console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));

function lastLetter(stringInput) {
    return stringInput.slice(-1);
}

console.log(lastLetter("abcd"))