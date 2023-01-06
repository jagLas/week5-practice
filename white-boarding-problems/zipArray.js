function zipArray(arr1, arr2) {
    const result = new Array(arr1.length)

    for (let i = 0; i < arr1.length; i++){
        result[i] = ([arr1[i], arr2[i]]);
    }

    return result;
}
//O(n) O(1)

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]