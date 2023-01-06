function countInnerElement(arr) {
    let counts = {}

    arr.forEach(el => {
        //if it is an array, creates a local count of that arrays counts
        if (Array.isArray(el)) {
            let count = countInnerElement(el);

            //goes through each key in the returned count and adds them to current count
            for (const key in count) {
                if(!counts[key]) {
                    counts[key] = count[key];
                } else {
                    counts[key] += count[key];
                }
            }
        //if it is not an array, checks if key exists and adds it to the count
        } else {
            if(!counts[el]){
                counts[el] = 1;
            } else {
                counts[el]++;
            }

        }
    });
    
    return counts;
}

debugger
const arr1 = [
    [1, 2, 4, 5],
    [2, 7, 4],
    [1, 4, 5, 2, 7]
  ]
  
  console.log(countInnerElement(arr1))  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}
  
  const arr2 = [
    ['a','b','c','d'],
    ['a','b'],
    ['a','c','d','a']
  ]
  
console.log(countInnerElement(arr2))  // => {a: 4, b: 2, c: 2, d: 2}