function oddRange(end) {
    const result = [];
    let i = 1;
    while (i <= end) {
        result.push(i);
        i += 2;
    }

    return result;
}


console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]