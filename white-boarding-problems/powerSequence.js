function powerSequence(base, length) {
    const sequence = [base];

    let runningProduct = base;
    for (let i = 1; i < length; i++){
        runningProduct *= base;
        sequence.push(runningProduct);
    }

    return sequence;
}


console.log(powerSequence(3, 4));  // => [ 3, 9, 27, 81 ]
console.log(powerSequence(2, 6));  // => [ 2, 4, 8, 16, 32, 64 ]
console.log(powerSequence(8, 3));  // => [ 8, 64, 512 ]