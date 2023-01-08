function countAdjacentSums(arr, n) {
    let count = 0;

    arr.forEach((num, index) => {
        if (num + arr[index + 1] === n) {
            count++;
        }
    })
    return count;
}

//time O(n) space O(1);

console.log(countAdjacentSums([1, 5, 1], 6)) // => 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)) // => 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)) // => 3