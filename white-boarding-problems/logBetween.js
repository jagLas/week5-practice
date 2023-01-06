function logBetween (a, b) {
    const result = [];

    while (a <= b) {
        result.push(a);
        a++;
    }

    return result;
}

//Time O(n), space O(n)

console.log(logBetween(-1, 2));  // => [-1, 0, 1, 2]
console.log(logBetween(14, 6));  // => []
console.log(logBetween(4, 6));  // => [4, 5, 6]