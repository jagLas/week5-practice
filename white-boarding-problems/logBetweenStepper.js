function logBetweenStepper (a, b, step) {
    const result = [];

    while (a <= b) {
        result.push(a);
        a += step;
    }
    
    return result;
}

//Time O(n), space O(n)


console.log(logBetweenStepper(5, 9, 1)) // => [5, 6, 7, 8, 9]
console.log(logBetweenStepper(-10, 15, 5)) // => [-10, -5, 0, 5, 10, 15]