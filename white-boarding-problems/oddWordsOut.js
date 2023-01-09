function oddWordsOut(sentence) {
    let words = sentence.split(' ');
    words = words.filter(word => {
        if (word.length % 2 === 0) {
            return word;
        }
    })

    return words.join(' ');
}

// O(n) O(n);

console.log(oddWordsOut('go to the store and buy milk'));  // => 'go to milk'
console.log(oddWordsOut('what is the answer'));  // => 'what is answer'