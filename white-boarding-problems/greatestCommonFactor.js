function greatestCommonFactor(num1, num2) {
    let factor = num1;
    while(true) {
        
        if (!(num1 % factor || num2 % factor)) {
            return factor;
        }

        factor--;
    }
}


console.log(greatestCommonFactor(15, 25)) // => 5

console.log(greatestCommonFactor(16, 24)) // => 8
console.log(greatestCommonFactor(7, 11) )// => 1