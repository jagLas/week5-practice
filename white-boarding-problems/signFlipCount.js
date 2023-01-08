function signFlipCount(nums) {

    nums = nums.filter(num => {
        if (num !== 0) {
            return num;
        }
    })

    nums = nums.map(num => num / Math.abs(num));

    nums = nums.filter((num, index) => {
        if (num === -nums[index + 1]) {
            return num;
        }
    })

    return nums.length;
}

//O(n) space O(n);

console.log(signFlipCount([5, 6, 10, 3])); // => 0
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, -5])); // => 2
console.log(signFlipCount([1, -2, -3, -4])); // => 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3