function elementCount(array) {
    const count = {}
    array.forEach(el => {
        if (!count[el]) {
            count[el] = 1;
        } else {
            count[el]++;
        }
    })

    return count;
}

console.log(elementCount(["a", "a", "b", "b"])); // => { "a" : 2, "b" : 2 }
console.log(elementCount(['c', 'a', 'c', 'a', 'b'])); // => { "c": 2, "a": 2, "b": 1 }