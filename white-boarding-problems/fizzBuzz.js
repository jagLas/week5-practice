function fizzBuzz(max) {
    const result = [];

    for (let i = 3; i < max; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            result.push(i);
        } else if (i % 3 !==0 && i %5 ===0) {
            result.push(i);
        }
    }

    return result;
}

//Time O(n) Space: O(n)

console.log(fizzBuzz(20)); // => [3, 5, 6, 9, 10, 12, 18]