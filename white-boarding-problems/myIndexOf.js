function myIndexOf(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }

    return -1;
}

//Time O(n) space O(1);

console.log(myIndexOf([1,2,3,4],4)); // => 3
console.log(myIndexOf([5,6,7,8],2)); // => -1