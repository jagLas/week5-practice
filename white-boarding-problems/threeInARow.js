function threeInARow(arr) {

    for (let i = 2; i < arr.length; i++) {
        let num1 = arr[i];
        let num2 = arr[i - 1];
        let num3 = arr[i - 2];
        if (num1 === num2 && num2 === num3){
            return true;
        }
    }
    return false;

}

//O(n) O(1);

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));  // => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3]));  // => false;