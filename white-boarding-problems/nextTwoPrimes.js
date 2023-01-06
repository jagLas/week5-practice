function isPrime(number) {
    if (number === 2) true;

    for (let i = 2; i < number; i++){
        if (!(number % i)) {
            return false;
        }
    }

    return true;
}

function nextTwoPrimes (n) {
    
    const nextPrimes = [];

    while (nextPrimes.length < 2) {
        n++;
        if(isPrime(n)) {
            nextPrimes.push(n);
        }
    }

    return nextPrimes;
}



console.log(nextTwoPrimes(2));  // => [ 3, 5 ]
console.log(nextTwoPrimes(3));  // => [ 5, 7 ]
console.log(nextTwoPrimes(7));  // => [ 11, 13 ]
console.log(nextTwoPrimes(8));  // => [ 11, 13 ]
console.log(nextTwoPrimes(20));  // => [ 23, 29 ]
console.log(nextTwoPrimes(97));  // => [ 101, 103 ]