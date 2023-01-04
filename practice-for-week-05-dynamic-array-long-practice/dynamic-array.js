class DynamicArray {

  constructor(defaultSize = 4) {
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

  push(val) {
    if (this.length >= this.capacity) {
      this.resize();
    }
    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    let value = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    if(this.length > 0) this.length--;
    return value;
  }

  shift() {
    let value = this.data[0];
    for (let i = 0; i < this.length; i ++) {
      this.data[i] = this.data[i + 1];
      this.data[i + 1] = undefined;
    }

    if (this.length > 0) this.length --;
    return value;
  }

  unshift(val) {
    if (this.length >= this.capacity) {
      this.resize();
    }
    this.length++;
    for (let i = this.length - 1; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
  }

  indexOf(val) {

    for (let i = 0; i < this.length; i++) {
      if (val === this.data[i]){
        return i;
      }
    }

    return -1;
  }

  resize() {
    this.capacity *= 2;

    while(this.data.length < this.capacity) {
      this.data.push(undefined);
    }
  }

}

dynamicArr = new DynamicArray();
dynamicArr.resize();
dynamicArr.push(1);
dynamicArr.push(2);
dynamicArr.push(3);

// console.log(dynamicArr)
// console.log(dynamicArr.shift());
// console.log(dynamicArr)
// console.log(dynamicArr.shift());
// console.log(dynamicArr)
// console.log(dynamicArr.shift());
// console.log(dynamicArr)



module.exports = DynamicArray;