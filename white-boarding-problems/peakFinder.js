function peakFinder (array) {
    const peaks = [];
    if (array[0] > array[1]) {
        peaks.push(0)
    }
    


    for (let i = 1; i < array.length - 1; i++) {
        const prev = array[i - 1];
        const curr = array[i];
        const next = array[i + 1];

        if (curr > prev && curr > next) {
            peaks.push(i);
        }
    }

    if (array[array.length - 1] > array[array.length - 2]) {
        peaks.push(array.length - 1);
    }

    return peaks;
}

//time O(n) space O(1)

console.log(peakFinder([1, 2, 3, 2, 1])); // => [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); // => [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); // => [2, 6, 8]