function reverb(word) {
    const vowels = 'aeiouAEIOU';

    for (let i = word.length - 1; i >=0; i--) {
        if(vowels.includes(word[i])) {
            return word + word.slice(i);
        }
    }

    return word;
}

//O(n) O(1);

console.log(reverb('running'));  // => 'runninging'
console.log(reverb('wild'));  // => 'wildild'
console.log(reverb('debugged'));  // => 'debuggeded'
console.log(reverb('my'));  // => 'my'