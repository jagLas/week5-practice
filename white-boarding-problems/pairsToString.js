function pairsToString(arr) {
  let string = '';

  arr.forEach(arr => {
    let output = arr[0];
    for (let i = 0; i < arr[1]; i++) {
      string += output;
    }
  })

  return string;
}

//Time o(n^2) space O(1);

const array1 = [
    ['a', 3],
    ['b', 1],
    ['c', 2]
  ];
  console.log(pairsToString(array1));  // => 'aaabcc'
  
  const array2 = [
    ['f', 1],
    ['o', 2],
    ['d', 1],
    ['!', 1]
  ];
  console.log(pairsToString(array2));  // => 'food!'
