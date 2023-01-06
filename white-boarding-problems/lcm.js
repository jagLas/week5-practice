function lcm(num1, num2) {
    let lcm;
    let multiple = num1;
    while (!lcm){
        multiple += num1;
        if (multiple % num2 === 0) {
            lcm = multiple;
        }
    }

    return lcm;
}


console.log(lcm(2, 3));  // => 6
console.log(lcm(6, 10));  // => 30
console.log(lcm(24, 26));  // => 312