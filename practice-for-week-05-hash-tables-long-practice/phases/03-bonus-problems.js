function kth(string, k) {
    //creates an object to store the counts of each element
    const counts = {};
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        if(!counts[letter]) {
            counts[letter] = 0;
        }

        counts[letter]++;
    }


    //finds the kth most occuring element
    let most = '';
    let mostCount = 0;
    let cycle = 0;

    while(cycle < k) {
        for (const letter in counts) {
            if (counts[letter] > mostCount) {
                mostCount = counts[letter];
                most = letter;
            }
        }
    
        cycle++;
        counts[most] = 0;
        mostCount = 0;
    }

    //returns it
    return most;
}

// console.log(kth('aaabbc', 1));     //  => 'a'
// console.log(kth('aaabbc', 2));     //  => 'b'
// console.log(kth('aaabbc', 3));     //  => 'c'


function newAlphabet (string, alphabet) {
    if (string.length <= 1) {
        return true;
    }

    const alphabetIndex = {}
    for (let i = 0; i < alphabet.length; i++) {
        const letter = alphabet[i];
        alphabetIndex[letter] = i;
    }

    for (let i = 0; i < string.length; i++) {
        const prevLetter = string[i - 1];
        const letter = string[i];
        const position = alphabetIndex[letter];
        const prevPosition = alphabetIndex[prevLetter];

        if (position < prevPosition) {
            return false;
        }
    }

    return true;
}

// console.log(newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz'));           // => true
// console.log(newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz'));       // => false
// console.log(newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz'));        // => true


function longestPalindrome (string) {
    let palindromeLength = 0;

    //constructs a object containing the counts of each letter
    const counts = {};
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        if(!counts[letter]) {
            counts[letter] = 0;
        }

        counts[letter]++;
    }

    //iterates through each letter
    for (const letter in counts) {
        let count = counts[letter];
        //removing 2 at a time to add to the palindrome length
        while (count > 1) {
            count -= 2;
            palindromeLength += 2;
        }

        //removes the letter from counts if even
        if (!count) {
            delete counts[letter];
        }
    }

    //if any single letter remains, add 1 to palindrome length
    if (Object.keys(counts).length > 0) {
        palindromeLength++;
    }
    
    return palindromeLength;
}

// console.log(longestPalindrome("abccccdd")); //  => 7 because the palindrome "dccaccd" can be built


function maxSubarr (array) {

    //creates an obj of counts for each number and a set of all numbers in array
    const counts = {};
    const nums = new Set();
    array.forEach(num => {
        if (!counts[num]) {
            counts[num] = 0;
            nums.add(num);
        }

        counts[num]++;
    })

    //constructs a set of all possible lengths of subarrays with a spread of 1 or less
    const lengths = new Set();
    nums.forEach(num => {
        if (nums.has(num + 1)) {
            lengths.add(counts[num] + counts[num + 1]);
        }

        lengths.add(counts[num])
    })

    //finds the highest length in the set
    let most = 0;
    lengths.forEach(length => {
        if (length > most) {
            most = length;
        }
    })

    return most;
}

// console.log(maxSubarr([1,3,2,2,5,2,3,7]));  // => 5 because the longest subarray is [3,2,2,2,3]
// console.log(maxSubarr([1,1,1,1,3])); // => 4 because the longest subarray is [1,1,1,1]


function coinChange(coins, amount) {
    if (amount <= 0) {
        return 0;
    }

    let changeMade = 0;
    let totalCoins = 0;
    for (let i = coins.length - 1; i >= 0; i--) {
        let coin = coins[i];
        let change = Math.floor(amount / coin);
        amount -= change * coin;
        totalCoins += change;        
    }

    if (!totalCoins) {
        return -1;
    }
    return totalCoins;
}

const coins = [1, 5, 10, 25];
const coins2 = [5];

console.log(coinChange(coins, 11));      // => 2, 10 + 1 = 11
console.log(coinChange(coins2, 3));      // => -1
console.log(coinChange(coins2, 0));      // => 0



//I'll attempt his bonus at a later date if I have time to
function climbingSteps(n) {

    const stepAmounts = {0: 1, 1: 1, 2: 2, 3: 4, 4: 6}

    if (stepAmounts[n]) {
        return stepAmounts[n];
    }




}

// There is 1 way to climb zero steps:
//   1. 0 steps
climbingSteps(0);  // 1

// There is 1 ways to climb one step:
//   1. 1 step
climbingSteps(1);  // 1

// There are 2 ways to climb two steps:
//   1. 1 step + 1 step
//   2. 2 steps
climbingSteps(2);  // 2

// There are 4 ways to climb three steps:
//   1. 1 step + 1 step + 1 step
//   2. 1 step + 2 steps
//   3. 2 steps + 1 step
//   4. 3 steps
climbingSteps(3);  // 4


// There are 6 ways to climb four steps:
//   1. 1 step + 1 step + 1 step + 1 step
//   2. 1 step + 1 step + 2 steps
//   3. 1 step + 2 steps + 1 step
//   4. 2 steps + 1 step + 1 step
//   5. 1 step + 3 steps
//   6. 3 steps + 1 steps
climbingSteps(4);  // 6

// // There are 5 ways to climb four steps:
// //   1. 1 step + 1 step + 1 step + 1 step
// //   2. 1 step + 1 step + 2 steps
// //   3. 1 step + 2 steps + 1 step
// //   4. 2 steps + 1 step + 1 step
// //   5. 1 step + 3 steps
// //   6. 3 steps + 1 steps
// //   7. 3 steps + 1 step + 1 step
// climbingSteps(4);  // 6