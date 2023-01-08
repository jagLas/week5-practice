// function signFlipCount(nums) {

//     nums = nums.filter(num => {
//         if (num !== 0) {
//             return num;
//         }
//     })

//     nums = nums.map(num => num / Math.abs(num));

//     nums = nums.filter((num, index) => {
//         if (num === -nums[index + 1]) {
//             return num;
//         }
//     })

//     return nums.length;
// }

//O(n) space O(n); could be optimized to O(1) space

function signFlipCount(nums) {

    let count = 0;
    let index = 0;
    let sign = 0;
    while (index < nums.length - 1) {
        sign = nums[index] / Math.abs(nums[index]);
        
        for (let i = index + 1; i < nums.length; i++) {
            const newSign = nums[i] / Math.abs(nums[i]);
            if (!nums[i]) {

            } else if(sign !== newSign) {
                count++;
                index = i;
                break;
            }
            index++;
        }
    }

    return count;
}

//O(n) O(1)

console.log(signFlipCount([5, 6, 10, 3])); // => 0
console.log(signFlipCount([-12, 0, -3, -5])); // => 0
console.log(signFlipCount([-12, 10, -3, -5])); // => 2
console.log(signFlipCount([1, -2, -3, -4])); // => 1
console.log(signFlipCount([-1, 11.3, -3, 100])); // => 3