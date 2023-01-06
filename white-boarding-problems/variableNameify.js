function variableNameify(words) {
    let variableName = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
        variableName += capitalize(words[i]);
    }
    return variableName;
}


function capitalize(word) {
    let newWord = word.slice(0, 1).toUpperCase();
    newWord += word.slice(1, word.length).toLowerCase();
    return newWord;
}

//O(n) O(1);
console.log(variableNameify(['is', 'prime'])) // => 'isPrime'
console.log(variableNameify(['remove', 'last', 'vowel'])) // => 'removeLastVowel'
console.log(variableNameify(['MaX', 'VALUE'])) // => 'maxValue'