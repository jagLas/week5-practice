function isPrime(number) {
    if(number < 2) return false;

    if (number === 2) return true;

    for (let i = 2; i < number; i++){
        if (!(number % i)) {
            return false;
        }
    }

    return true;
}

//Time O(n) space: O(1);

//due to large calculations a memo might be a good for repeat values

console.log(isPrime(2));  // => true
console.log(isPrime(10));  // => false
console.log(isPrime(11));  // => true
console.log(isPrime(9));  // => false
console.log(isPrime(2017));  // => true