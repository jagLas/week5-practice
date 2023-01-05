// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //O(1)

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val);

        this.length++;

        //checks if list is empty and adds itself to head and tail
        if(this.length === 1) {
            this.head = newNode;
            this.tail = newNode;    
            return;        
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    removeFromHead() {
        // Remove node at head

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if(this.length) {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if(this.length){
            return this.tail.value;
        }
        
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    print() {
        // Print out the linked list
        if (!this.head) {
            return;
        }

        
        let currentNode = this.head;

        while(currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }
}

const list = new DoublyLinkedList();
debugger
list.addToTail(1);
list.print()

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
