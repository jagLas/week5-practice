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
  const found = new Set();
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if(found.has(num)){
      return num;
    } else {
      found.add(num);
    }
  }

  return undefined;
}


function twoSum(nums, target) {
  const difs = new Set();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let dif = target - num;
    if (difs.has(num)) {
      return true;
    } else {
      difs.add(dif);
    }
  }

  return false;
}



function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];