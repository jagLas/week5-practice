cachedPrimes = {1: 2}

function firstNPrimes(n) {
    const primes = [];
    if (n < 1) return primes;

    let lastCache;

    for (let i = 0; i <= n; i++) {
        if(cachedPrimes[i]) {
            primes.push(cachedPrimes[i]);
            lastCache = i;
        }
    }

    let possiblePrime = cachedPrimes[lastCache] + 1;

    if(n === lastCache) {
        return primes;
    }

    lastCache++;


    while (!cachedPrimes[lastCache]) {
        for (let i = 2; i < possiblePrime; i++) {
            if(possiblePrime % i === 0) {
                possiblePrime++;
                i = 2;
            }
        }

        cachedPrimes[lastCache] = possiblePrime;
    }

    return firstNPrimes(n);
}
//I thought I made the time more optimal by creating a cache for repeat calculations.
//but testing seems to be slower than the iterative method 

function firstNPrimes2(n) {
    console.time()
    const primes = []
    
    if(n > 0) {
        primes.push(2)
    }

    let possiblePrime = 3
    while(primes.length < n) {
        for (let i = 2; i < possiblePrime; i++) {
            if (possiblePrime % i === 0) {
                possiblePrime++;
                i = 2;
            }
        }

        primes.push(possiblePrime);
        // console.log(`calculating ${primes.length + 1}`)
        possiblePrime++;
    }
    console.timeEnd()
    return primes;
}



console.log(firstNPrimes2(100000));
// console.log(firstNPrimes(0));  // => []
// console.log(firstNPrimes(1));  // => [2]
// console.log(firstNPrimes(4));  // => [2, 3, 5, 7]

console.time()
debugger
for (let i = 0; i <= 100000; i += 100) {
    // console.log(`calculating ${i}`)
    firstNPrimes(i);
}
console.timeEnd();

console.log(firstNPrimes(500000))
// console.log(firstNPrimes(5000));
// console.log(firstNPrimes(8000));  // => [2, 3, 5, 7]
// console.log(firstNPrimes(10000));
// console.log(firstNPrimes(70000));
// console.log(firstNPrimes(10000));
