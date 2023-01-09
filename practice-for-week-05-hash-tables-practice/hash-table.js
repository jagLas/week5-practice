const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here

    this.count = 0;
    this.capacity = numBuckets;
    this.data = [];
    for (let i = 0; i < numBuckets; i++) {
      this.data.push(null);
    }
  }

  hash(key) {
    let hash = '0x' + sha256(key).slice(0, 8);

    hash = Number(hash).toString(10)

    return Number(hash);
  }

  hashMod(key) {
    let hash = this.hash(key);

    let bucket = hash % this.capacity;

    return bucket;
  }

  insertNoCollisions(key, value) {
    // Your code here
  }

  insertWithHashCollisions(key, value) {
    // Your code here
  }

  insert(key, value) {
    // Your code here
  }

}

// const table = new HashTable(10);
// console.log(table.hashMod('ABC'))

module.exports = HashTable;