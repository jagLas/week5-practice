// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {

  //converts into binary and leaves off 0b
  if (element[1] != 'b') {
    const binaryArray = [0];

    let place = 0;
    let base = 1;
    while (element - base >= element / 2) {
      binaryArray.push(0)
      place++;
      base = 2 ** place;
    }
  
    let newDec = element;
  
  
    binaryArray.forEach((digit, index) => {
      let base = 2 ** (binaryArray.length - index - 1);
      if (newDec - base >= 0) {
        binaryArray.splice(index, 1, 1);
        newDec -= base;
      }
  
    })
  
    while (binaryArray.length % 4 != 0) {
      binaryArray.unshift(0);
    }

    element = binaryArray.join('');

  }

  //removes leading 0b if binary
  if (element[1] === 'b') {
    element = element.slice(2)
  }

  //lookup objects for hexvalues given a 4 digit binary
  const hexObj = {'0000': 0, '0001': 1, '0010': 2, '0011': 3, '0100': 4, '0101': 5, '0110': 6, '0111': 7, '1000': 8, '1001': 9, '1010': 'a', '1011': 'b', '1100': 'c', '1101': 'd', '1110': 'e', '1111': 'f'}
  

  let hexNum = '0x'
  //goes by groups of four to convert to hex shorthand
  for (let i = 0; i < element.length; i += 4){
    let chunk = element.slice(i, i + 4);
    let hexValue = hexObj[chunk];
    hexNum += hexValue;
  }

  return hexNum;
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33