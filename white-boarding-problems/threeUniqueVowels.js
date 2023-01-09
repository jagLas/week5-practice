function threeUniqueVowels(string) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    VOWELS.forEach(vowel => {
        if (string.includes(vowel)) {
            count++;
        }
    })

    if(count > 2) {
        return true;
    }

    return false;

}


//O(n) O(1)

console.log(threeUniqueVowels('delicious'));  // => true
console.log(threeUniqueVowels('the bootcamp'));  // => true
console.log(threeUniqueVowels('bootcamp'));  // => false
console.log(threeUniqueVowels('dog'));  // => false
console.log(threeUniqueVowels('go home'));  // => false