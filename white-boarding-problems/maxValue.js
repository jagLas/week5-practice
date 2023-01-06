function maxValue (array) {
    if (!array.length) {
        return [];
    }

    return array.reduce((accum, num) => {
        if (num > accum) {
            return num;
        } else {
            return accum;
        }
    })
}

//Time: O(n) space: O(1);

console.log(maxValue([12, 6, 43, 2]));  // => 43
console.log(maxValue([]));  // => null
console.log(maxValue([-4, -10, 0.43]));  // => 0.43