function divisibleByThreePairSum (array) {
    const target = 3;
    const pairs = [];

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const num1 = array[i];
            const num2 = array[j];
            if ((num1 + num2) % target === 0) {
                pairs.push([i, j])
            }
        }
    }

    return pairs;
}

//O(n^2) O(n)

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1) // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
console.log(arr2) // => [[1, 3]]