const addZeros = require('../utils/addZeros');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  let binaryArray = [];

  for (let i = 0; i < str.length; i++) {
    binaryArray.push(str.charCodeAt(i));
  }

  binaryArray = binaryArray.map(code => code.toString(2));

  binaryArray = binaryArray.map(binary => addZeros(binary, 8));
  
  return binaryArray.join('');
};

/******************************************************************************/

console.log(asciiTo8bit('123'));
// 0011 0001 0011 0010 0011 0011

console.log(asciiTo8bit('ABC'));
// 0100 0001 0100 0010 0100 0011

console.log(asciiTo8bit('Hello, world!'));
// 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001