function vowelShift(sentence) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    const shiftedVowels = ['e', 'i', 'o', 'u', 'a'];
    let newSentence = '';

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        if (VOWELS.includes(char)) {
            const vowelIndex = VOWELS.indexOf(char);
            newSentence += shiftedVowels[vowelIndex]

        } else {
            newSentence += char;
        }
    }

    return newSentence;
}

//O(n) O(1);

console.log(vowelShift('bootcamp'));  // => 'buutcemp'
console.log(vowelShift('hello world'));  // => 'hillu wurld'
console.log(vowelShift('on the hunt'));  // => 'un thi hant'