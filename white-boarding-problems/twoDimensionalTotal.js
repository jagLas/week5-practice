function twoDimensionalTotal(arr1) {
    let sum = 0;

    arr1.forEach(el => {
        if (Array.isArray(el)) {
            sum += twoDimensionalTotal(el);
        } else {
            sum += el;
        }
    });
    
    return sum;
}

const arr1 = [
    [5, 2, 5, 3],
    [12, 13],
  ];
  
  console.log(twoDimensionalTotal(arr1));  // => 40
  
  const arr2 = [
    [2],
    [1, 9],
    [1, 1, 1]
  ]
  
 console.log(twoDimensionalTotal(arr2));  // => 15