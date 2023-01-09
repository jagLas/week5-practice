function mindPsAndQs(str) {

    let streak = 0;
    let longestStreak = 0;

    for (let i = 0; i < str.length; i++){
        let char = str[i];

        if ((char === 'P' || char === 'Q')) {
            streak++;
        } 

        if (streak > longestStreak) {
            longestStreak = streak;
        }

        if (char !== 'P' && char !== 'Q') {
            streak = 0;
        }
    }

    return longestStreak;
}

//O(n) O(1);


console.log(mindPsAndQs('BOOTCAMP'));  // => 1
console.log(mindPsAndQs('APCDQQPPC'));  // => 4
console.log(mindPsAndQs('PQPQ'));  // => 4
console.log(mindPsAndQs('PPPXQPPPQ'));  // => 5