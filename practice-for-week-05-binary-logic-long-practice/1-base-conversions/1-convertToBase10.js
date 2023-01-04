// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {

  let sum = 0;

  //for binary numbers
  if (str[1] === 'b') {
    for (let i = str.length - 1, j = 0; i > 1; i--, j++) {
      sum += str[i] * 2 ** j;
    }
  }

  //for hex numbers
  if (str[1] === 'x') {
    for (let i = str.length - 1, j = 0; i > 1; i--, j++) {
      let digit = str[i];
      if (digit === 'a'){
        digit = 10;
      } else if (digit === 'b') {
        digit = 11;
      } else if (digit === 'c') {
        digit = 12;
      } else if (digit === 'd') {
        digit = 13;
      } else if (digit === 'e') {
        digit = 14;
      } else if (digit === 'f') {
        digit = 15;
      }
      sum += digit * 16 ** j;
    }
  }

  return sum;
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914