function countRepeats(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        if (string.slice(i + 1).includes(letter)) {
            count ++;
            string = string.replaceAll(letter, '');
            string = letter.concat(string);
        }
    }

    return count;
}

//O(n) O(1);

console.log(countRepeats('calvin')); // => 0
console.log(countRepeats('caaaalvin')); // => 1
console.log(countRepeats('pops')); // => 1
console.log(countRepeats('mississippi')); // => 3
console.log(countRepeats('hellobootcampprep')); // => 4