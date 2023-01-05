// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) { 
        // Add node of val to head of linked list
        const node = new SinglyLinkedNode(val);
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        //The time to implement this is O(1).

    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //This operation is an O(n) operation as it needs to go through each node to find the tail

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;


        return this;
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head) {
            return;
        }

        this.length--;
        let removedHead = this.head;
        this.head = this.head.next;

        return removedHead;

        // Write your hypothesis on the time complexity of this method here
        //this has a time complexity of O(1) as it only needs to go to the first and second node
    }

    removeFromTail() {
        // Remove node at tail

        //checks if list is empty and returns undefined
        if(!this.head) {
            return;
        }

        //if not empty
        this.length--;

        //checks if there is only 1 item, and removes it
        let currentNode = this.head;
        if (!currentNode.next) {
            this.head = null;
            return currentNode;
        }


        let nextNode = currentNode.next;

        while (nextNode.next) {
            currentNode = nextNode;
            nextNode = nextNode.next;
        }
        
        currentNode.next = null;

        return nextNode;
        // Write your hypothesis on the time complexity of this method here
        //has to go through all n values so it is O(n);
    }

    peekAtHead() {
        // Return value of head node
        if(!this.head) {
            return;
        }

        return this.head.value;

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

const list = new SinglyLinkedList();
list.addToTail(1);
list.print()

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
