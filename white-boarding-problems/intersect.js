function intersect ( arr1, arr2){
    return arr1.filter(el => {
        if(arr2.includes(el)) return el;
    })
}

//O(n^2) Space O(n)

console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e'])) // => [ 'b', 'd' ]
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z'])) // => []