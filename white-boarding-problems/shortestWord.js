function shortestWord(sentence) {
    let words = sentence.split(' ');
    return words.reduce((accum, nextWord) => {
        if(nextWord.length < accum.length) {
            return nextWord;
        } else {
            return accum;
        }
    })
}

//O(n) O(n)

console.log(shortestWord('app academy is cool') )// => 'is'
console.log(shortestWord('programming bootcamp')) // => 'bootcamp'