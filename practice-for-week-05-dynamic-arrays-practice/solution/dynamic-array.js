class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize;
    this.data = [];
    this.length = 0;

    for (let i = 0; i < defaultSize; i++) {
      this.data.push(undefined);
    }
  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    this.length++;
    for (let i = this.length - 1; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
  }

}




module.exports = DynamicArray;