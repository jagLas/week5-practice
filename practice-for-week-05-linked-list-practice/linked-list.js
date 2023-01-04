class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    //creates a new node with the value
    let nextNode = new LinkedListNode(val);

    //points the new nodes next value to the current head
    nextNode.next = this.head;

    //changes the head to the new node
    this.head = nextNode;

    //adjusts length of linked list
    this.length++;
  }

  addToTail(val) {
    this.length++

    //creates a new node to add to the tail
    const nextNode = new LinkedListNode(val);

    //adds node to head if list is empty
    if(!this.head) {
      this.head = nextNode;
      return;
    }

    //finds the last node
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    //sets the last nodes next to new node
    currentNode.next = nextNode;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;