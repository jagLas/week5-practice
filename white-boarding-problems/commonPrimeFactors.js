function commonPrimeFactors(num1, num2) {
    const factors = [];

    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            factors.push(i);
        }
    }

    return factors.filter(num => {
        if (isPrime(num)) return num;
    })
}

function isPrime(number) {
    if (number < 2) return false;

    if (number === 2) return true;

    for (let i = 2; i < number; i++){
        if (!(number % i)) {
            return false;
        }
    }

    return true;
}

//O(n) space O(n);

console.log(commonPrimeFactors(12, 50));  // => [ 2 ]
console.log(commonPrimeFactors(6, 24));  // => [ 2, 3 ]
console.log(commonPrimeFactors(11,22));  // => [ 11 ]
console.log(commonPrimeFactors(45, 60));  // => [ 3, 5 ]