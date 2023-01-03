const findMinimum = arr => {

  //uses O(n) for time and O(1) for space
  return arr.reduce((min, num) => {

    if(num < min) {
      return num;
    } else {
      return min;
    }
  }, arr[0])

};

const runningSum = arr => {

  const sums = [];
  let sum = 0;

  //Time: O(n) Space: O(n)
  arr.forEach(num => {
    sum += num;
    sums.push(sum);
  })
  
  return sums;
};

const evenNumOfChars = arr => {

  //Time: O(n) Space: O(n)
  const evenArr = arr.filter(el => {
    if (el.length % 2 === 0){
      return el;
    }
  })

  return evenArr.length;

};

const smallerThanCurr = arr => {
  //Time for whole function is O(n^2) and space is O(n)

  const result = [];

  //Time O(n) Space: O(n)
  arr.forEach(currentNum => {
    let smallerCount = 0;

    //Time O(n) Space: O(1)
    for (let i = 0; i < arr.length; i++) {
      let otherNum = arr[i];
      if (otherNum < currentNum) {
        smallerCount++;
      }
    }

    result.push(smallerCount);
  })

  return result;
};

const twoSum = (arr, target) => {

  //Whole Function: Time O(n^2) Space O(1)

  //Time O(n) Space O(1)
  for (let i = 0; i < arr.length - 1; i++) {
    //Time O(n) Space (O1)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }

  return false;
};

const secondLargest = arr => {
  //whole function: Time O(n) Space O(n). Could possibly be reduced space O(1)

  //returns undefined if array does not have two elements
  if(arr.length <= 1) {
    return undefined;
  }

  //Time O(n) Space O(1);
  const largest = Math.max(...arr);

  //Time O(n) Space O(n)
  const smallerArr = arr.filter(num => {
    if (num < largest) {
      return num;
    }
  })

  //Time O(n) SpaceO(1)
  const secondLargest = Math.max(...smallerArr);
  
  if (secondLargest > -Infinity) {
    return secondLargest;
  }


  return largest
};

const shuffle = (arr) => {

  //whole function O(n^2) space O(n) (because as a new copy is being created the old one is deleted)

  //Time O(n) Space O(n)
  const copy = arr.slice();
  const shuffledCopy = [];
  
  //Time O(n) Space O(1)
  while (copy.length > 0) {
    const randomIndex = Math.floor(Math.random() * copy.length);
    //Time O(n) Space O(n)
    shuffledCopy.push(...copy.splice(randomIndex, 1))
  }

  return shuffledCopy;

};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];