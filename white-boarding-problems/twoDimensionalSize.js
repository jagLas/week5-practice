function twoDimensionalSize(array) {
    let length = 0;
    array.forEach(el => {
        length += el.length;
    })

    return length;
}

//O(n) O(1)

const arr1 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
  ];
  console.log(twoDimensionalSize(arr1));  // => 9
  
  const arr2 = [
    ['a'],
    ['b', 'c', 'd', 'e']
  ];
  console.log(twoDimensionalSize(arr2));  // => 5