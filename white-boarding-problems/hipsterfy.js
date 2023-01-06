function hipsterfy(sentence) {
    let words = sentence.split(' ');
    words = words.map(word => hipsterfyWord(word));
    return words.join(' ');
}

//O(n) O(n)

function hipsterfyWord (word) {
    const vowels = 'aeiouAEIOU';
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i).concat(word.slice(i + 1));
        }
    }
}

//O(n) O(1)

console.log(hipsterfy("proper"));  // => "propr"
console.log(hipsterfy("proper tonic panther"));  // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana"));  // => "towl flickr banan"
console.log(hipsterfy("runner anaconda"));  // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries"));  // => "turtl cheeseburgr fris"