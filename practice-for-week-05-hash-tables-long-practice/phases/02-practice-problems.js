function anagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    let obj = obj1;

    if(!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }

    letter = str2[i];
    obj = obj2;

    if(!obj[letter]) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }

  for (const letter in obj1) {
    if(obj2[letter] !== obj1[letter]) {
      return false;
    }
  }

  return true;
}


function commonElements(arr1, arr2) {
  const set1 = new Set();
  arr1.forEach(el => set1.add(el));

  const result = [];
  arr2.forEach(el => {
    if (set1.has(el)) {
      result.push(el);
    }
  })

  return result;
}


function duplicate(arr) {
  // Your code here
}

console.log(duplicate([2,2,1]));             // => 2
console.log(duplicate([7,2,4,9,5,4,8]));     // => 4

function twoSum(nums, target) {
  // Your code here
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];