function printReverse(min, max) {
    const result = [];

    while (max > min + 1) {
        max--;
        result.push(max);
    }

    return result;
}

//Time: O(n) Space O(n);

console.log(printReverse(13, 18)) // => [17, 16, 15, 14]
console.log(printReverse(90, 94)) // => [93, 92, 91]