function hasSymmetry(array) {
    const splitArray = splitHalfArray(array);
    let first = splitArray[0].reverse().toString();
    let second = splitArray[1].toString(); 

    if(first === second) {
        return true;
    }

    return false;
}

function splitHalfArray(array) {
    const halfIndex = array.length / 2;
  
    const firstHalf = array.slice(0, Math.floor(halfIndex))
    const secondHalf = array.slice(Math.ceil(halfIndex));
    return [firstHalf, secondHalf];
}

//O(n), O(n)


console.log(hasSymmetry([1, 2, 3, 3, 2, 1])) // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])) // => false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])) // => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])) // => false