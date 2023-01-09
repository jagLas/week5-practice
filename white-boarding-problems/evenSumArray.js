function evenSumArray(array) {
    return array.map(num => evenSum(num))

}

function evenSum(num) {
    let sum = 0;
    for (let i = 2; i <= num; i += 2) {
        sum += i;
    }

    return sum;
}

//O(n^2) O(n);

console.log(evenSumArray([6, 7, 5])) // => [ 12, 12, )6 ]
console.log(evenSumArray([2, 8, 3, 5])) // => [ 2, 20, 2, 6 ])