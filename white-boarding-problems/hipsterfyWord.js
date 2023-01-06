function hipsterfyWord (word) {
    const vowels = 'aeiouAEIOU';
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowels.includes(word[i])) {
            return word.slice(0, i).concat(word.slice(i + 1));
        }
    }
}


console.log(hipsterfyWord('proper')) // => 'propr'
console.log(hipsterfyWord('tonic')) // => 'tonc'
console.log(hipsterfyWord('PANTHER')) // => 'PANTHR'
console.log(hipsterfyWord('BACKWARDS')) // => 'BACKWRDS'