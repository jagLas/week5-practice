function commonFactors(num1, num2) {
    const factors = [];

    for (let i = 1; i <= num1; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            factors.push(i);
        }
    }

    return factors;
}

//O(n) O(n)


console.log(commonFactors(12, 50));  // => [ 1, 2 ]
console.log(commonFactors(6, 24));  // => [ 1, 2, 3, 6 ]
console.log(commonFactors(11, 22));  // => [ 1, 11 ]
console.log(commonFactors(45, 60));  // => [ 1, 3, 5, 15 ]