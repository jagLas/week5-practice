function reverse2D(array) {
    let reversed = '';

    for (let i = array.length - 1; i >= 0; i--) {
        const el = array[i];
        if (Array.isArray(el)) {
            reversed += reverse2D(el);
        } else {
            reversed += el;
        }
    }
    return reversed;
}

//O(n^2) O(n^2);

const arr1 = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f'],
    ['g', 'h', 'i']
  ];
  
  console.log(reverse2D(arr1)) // => 'ihgfedcba'
  const arr2 = [
    ['Julian', 'Matt', 'Mike'],
    ['Oscar', 'Patrick']
  ];
  console.log(reverse2D(arr2)) // => 'PatrickOscarMikeMattJulian'