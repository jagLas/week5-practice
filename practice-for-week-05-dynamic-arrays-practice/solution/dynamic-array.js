class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize;
    this.data = [];
    this.length = 0;

    for (let i = 0; i < defaultSize; i++) {
      this.data.push('');
    }
  }

  read(index) {

    // Your code here
  }

  unshift(val) {

    // Your code here
  }

}

dynamicArr = new DynamicArray();
console.log(dynamicArr.length)
console.log(this.data)



module.exports = DynamicArray;