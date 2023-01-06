function objectToString(count) {
    let string = '';
    for (const key in count) {
        for (let i = 0; i < count[key]; i++) {
            string += key;
        }
    }

    return string;
}

//O(n^2) O(1)

console.log(objectToString({ a : 2, b: 4, c: 1 })) // => 'aabbbbc'
console.log(objectToString({ b: 1, o: 2, t: 1 }) )// => 'boot'