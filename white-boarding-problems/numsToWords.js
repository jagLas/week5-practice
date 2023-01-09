function numsToWords(numString) {
    const cypher = {1: 'One', 2: 'Two', 3: 'Three', 4: 'Four',
                    5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine'}

    let word = '';
    for (let i = 0; i < numString.length; i++) {
        const digit = numString[i];
        word += cypher[digit];
    }

    return word;
}

//O(n) O(1);

console.log(numsToWords('42')) // => 'FourTwo'
console.log(numsToWords('123')) // => 'OneTwoThree'
console.log(numsToWords('159598')) // => 'OneFiveNineFiveNineEight'