function mirrorArray(array) {
    const mirror = array.slice();
    return array.concat(mirror.reverse());
}

//time O(N) space O(n)
console.log(mirrorArray([1,2,3]));
  // => [ 1, 2, 3, 3, 2, 1 ]
console.log(mirrorArray(['a', 'b', 'c', 'd']));
  // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]