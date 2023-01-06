function factorial(n) {
    if (n < 3) {
        return 2;
    }

    return n * factorial(n-1);
}

//O(n) space O(n)

function factorialNonRecursive(n) {
    let product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }

    return product;
}

//O(n) O(1)

console.log(factorial(1));  // => 1
console.log(factorial(4));  // => 24
console.log(factorial(5));  // => 120
console.log(factorial(100));  // => 3628800

console.log(factorialNonRecursive(1));  // => 1
console.log(factorialNonRecursive(4));  // => 24
console.log(factorialNonRecursive(5));  // => 120
console.log(factorialNonRecursive(100));  // => 3628800