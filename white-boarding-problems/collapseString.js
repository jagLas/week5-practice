function collapseString(str) {
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        const nextChar = str[i + 1];
        const currChar = str [i];

        if (nextChar !== currChar) {
            newString += currChar;
        }
    }

    return newString;
}

console.log(collapseString('apple')); // => 'aple'
console.log(collapseString('AAAaalviiiiin!!!')); // => 'Aalvin!'
console.log(collapseString('hello   app academy')); // => 'helo ap academy'