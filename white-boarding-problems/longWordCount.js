function longWordCount(string) {
    const words = string.split(' ');
    let longCount = 0;
    words.forEach(word => {
        if(word.length > 7){
            longCount++;
        }
    })

    return longCount;
}

console.log(longWordCount(""));  // => 0
console.log(longWordCount("short words only"));  // => 0
console.log(longWordCount("one reallylong word"));  // => 1
console.log(longWordCount("two reallylong words inthisstring"));  // => 2
console.log(longWordCount("allwordword longwordword wordswordword"));  // => 3
console.log(longWordCount("seventy schfifty five"));  // => 1