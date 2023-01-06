function pairProduct (arr, num) {
    const pairs = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const num1 = arr[i];
            const num2 = arr[j];
            if ((num1 * num2) === num) {
                pairs.push([i, j])
            }
        }
    }

    return pairs;
}

console.log(pairProduct([1, 2, 3, 4, 5], 4)); // => [ [ 0, 3 ] ]
console.log(pairProduct([1, 2, 3, 4, 5], 8)); // => [ [ 1, 3 ] ]
console.log(pairProduct([1, 2, 3, 12, 8], 24)); // => [ [ 1, 3 ], [ 2, 4 ] ]