function factorArray (array, number) {

    return array.filter(factor => {
        if (!(number % factor)) return factor;
    })
}

//Time: O(N) space O(n)


console.log(factorArray([2,3,4,5,6],20)) // => [2,4,5]
console.log(factorArray([2,3,4,5,6],35)) // => [5]
console.log(factorArray([10,15,20,25],5)) // => []