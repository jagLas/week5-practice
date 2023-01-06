function valueConcat(array, obj) {
    const result = [];
    array.forEach(key => {
        if (!obj[key]) {
            result.push(key);
        } else{
            result.push(key.concat(obj[key]));
        }
      
    })
    return result;
}

//O(n) O(n)

const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
console.log(valueConcat(arr, obj)) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]
console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })) // => [ 'a', 'b2', 'c3' ]