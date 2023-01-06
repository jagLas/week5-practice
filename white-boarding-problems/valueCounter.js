function valueCounter (obj, val) {
    let count = 0;

    for (const key in obj) {
        if (obj[key] === val) count++;
    }

    return count;
}

//O(n) O(1);

const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
console.log(valueCounter(obj1, 'Anne'))  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
console.log(valueCounter(obj2, 88))  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
console.log(valueCounter(pairs, 'Roman'))  // => 2