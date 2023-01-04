class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    //increase length of linked list
    this.length++

    //constructs new node and sets next value to the head. Tail should remain null
    const newNode = new DoublyLinkedListNode(val);
    newNode.next = this.head;

    //if list empty, newNode should become new tail and head
    if(!this.head) {
      this.tail = newNode;
      this.head = newNode;
      return;
    }

    //if it isnt empty it should:
    //set the old head's previous to the new node
    this.head.prev = newNode;
    //set the new head to point to the new node
    this.head = newNode;

  }

  addToTail(val) {
    //increase length of list
    this.length++;

    //creates a new node with value
    const newNode = new DoublyLinkedListNode(val);

    //checks if list is empty and sets itself to head and tail if not
    if(!this.head) {
      this.tail = newNode;
      this.head = newNode;
      return;
    }

    //sets the newNodes previous as the current tail
    newNode.prev = this.tail;

    //sets the previous tail to recognize the next Node as next
    this.tail.next = newNode;
    
    //sets the tail to the newNode
    this.tail = newNode;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;