function abbreviateWord(word){
    const vowels = 'aeiouAEIOU';
    let letters = word.split('');
    letters = letters.filter(letter => {
        if (!vowels.includes(letter)){
            return letter;
        }
    })

    return letters.join('');
}

function abbreviate (sentence) {

    let words = sentence.split(' ');

    words = words.map(word => {
        if (word.length > 4) {
            return abbreviateWord(word);
        } else {
            return word;
        }
    })

    return words.join(' ');
}

//time O(n^2) space O(n^2);

console.log(abbreviate('the bootcamp is fun')); // => 'the btcmp is fun'
console.log(abbreviate('programming is fantastic')); // => 'prgrmmng is fntstc'
console.log(abbreviate('hello world')); // => 'hll wrld'
console.log(abbreviate('how are you')); // => 'how are you'