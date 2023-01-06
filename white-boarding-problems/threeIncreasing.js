function threeIncreasing(arr) {

    for (let i = 2; i < arr.length; i++) {
        let num1 = arr[i];
        let num2 = arr[i - 1];
        let num3 = arr[i - 2];
        if (num1 - 1 === num2 && num2 - 1 === num3){
            return true;
        }
    }
    return false;

}

//O(n) O(1)

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));  // => true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));  // => false