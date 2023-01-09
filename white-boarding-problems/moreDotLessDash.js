function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if(char === '-') dashCount++;
        if(char === '.') dotCount++;
    }

    if (dotCount > dashCount) {
        return true;
    }

    return false;
}

//O(n) O(1)

console.log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
console.log(moreDotLessDash('.-.-.'));  // => true
console.log(moreDotLessDash('.-'));  // => false
console.log(moreDotLessDash('..--'));  // => false