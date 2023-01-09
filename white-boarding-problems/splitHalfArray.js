function splitHalfArray(array) {
  const halfIndex = array.length / 2;

  const firstHalf = array.slice(0, Math.floor(halfIndex))
  const secondHalf = array.slice(Math.ceil(halfIndex));
  return [firstHalf, secondHalf];
}

//O(1) O(n)

console.log(splitHalfArray([1, 2, 3, 4, 5]));
  // => [ [ 1, 2 ], [ 4, 5 ] ]

console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
  // => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]