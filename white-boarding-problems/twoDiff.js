function makePairsWithIndexes(array) {
    const pairs = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const pair = {num1: array[i], num2: array[j], index1: i, index2: j}
            pairs.push(pair);
        }
    }

    return pairs;
}

function twoDiff(array) {
    const pairs = makePairsWithIndexes(array);
    const pairIndeces = [];
    pairs.forEach(pair => {
        if(Math.abs(pair.num1 - pair.num2) === 2) {
            pairIndeces.push([pair.index1, pair.index2])
        }
    })

    return pairIndeces;
}

//O(n^2) O(n^2). Space could be made O(n) at the sacrifice of less clean code.

console.log(twoDiff([2, 3, 4, 6, 1, 7]))  // => [[0, 2], [1, 4], [2, 3]]
console.log(twoDiff([0, 2, 4, 3, 5]))  // => [[0, 1], [1, 2], [3,4]]
console.log(twoDiff([]))  // => []
