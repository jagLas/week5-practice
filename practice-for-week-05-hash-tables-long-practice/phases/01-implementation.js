class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
    this.count = 0;
    this.capacity = numBuckets;

    this.data = new Array(numBuckets);
    for (let i = 0; i < numBuckets; i++){
      this.data[i] = null;
    }
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    const bucket = this.hashMod(key);
    let bucketPair = this.data[bucket];
    const pair = new KeyValuePair(key, value);
    pair.next = bucketPair;


    //while the bucket has data
    while(bucketPair) {
      //check if the keys match
      if(bucketPair.key === key) {
        bucketPair.value = value; //change key value
        return; //end function
      } else {
        bucketPair = bucketPair.next; //go to pair in bucket
      }
    }
  
    //add value to bucket with Collisions if no keys matched
    this.data[bucket] = pair;
    this.count++;
  }


  read(key) {
    const bucket = this.hashMod(key);
    let bucketPair = this.data[bucket];

    while(bucketPair) {
      //check if the keys match
      if(bucketPair.key === key) {
        return bucketPair.value; //end function
      } else {
        bucketPair = bucketPair.next; //go to pair in bucket
      }
    }

    return undefined;
  }


  resize() {
    const newHash = new HashTable(this.capacity * 2);

    this.data.forEach(bucket => {
      while(bucket) {
        newHash.insert(bucket.key, bucket.value);
        bucket = bucket.next;
      }
    })

    this.data = newHash.data;
    this.capacity *= 2;
  }


  delete(key) {

    const bucket = this.hashMod(key);
    let bucketPair = this.data[bucket];

    if(bucketPair === null) {
      return "Key not found";
    }

    if(bucketPair.key === key) {
      this.data[bucket] = bucketPair.next;
      this.count--;
      return;
    }

    while(bucketPair) {

      if(bucketPair.next === null) {
        return 'Key not found';
      }

      if(bucketPair.next.key === key) {
        this.data[bucket].next = bucketPair.next.next;
        this.count--;
        return;
      } else {
        bucketPair = bucketPair.next; //go to pair in bucket
      }
    }

  }
}


module.exports = HashTable;