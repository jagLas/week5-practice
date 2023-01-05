// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list

        //O(n) time code
        let count = 0;

        if(!this.head) {
            return count;
        }

        let currentNode = this.head;
        while (currentNode){
            count++;
            currentNode = currentNode.next;
        }

        return count;
        // Implement in O(n) and in O(1) time complexity
        //O(1) can be achieved by adding a this.length variable and updating the code to accomdate

    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;

        if(!this.head) {
            return sum;
        }

        let currentNode = this.head;
        while (currentNode){
            sum += currentNode.value;
            currentNode = currentNode.next;
        }

        return sum;
        // Write your hypothesis on the time complexity of this method here
        //O(n) time complexity
    }

    averageValue() {
        // Returns the average value of all the nodes
        let count = 0;
        let sum = 0;

        if(!this.head) {
            return sum;
        }

        let currentNode = this.head;
        while (currentNode){
            sum += currentNode.value;
            count++;
            currentNode = currentNode.next;
        }

        return sum / count;
        // Write your hypothesis on the time complexity of this method here
        //O(n) time complexity
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let count = 0;

        if(!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode){
            if(count === n) {
                return currentNode;
            }
            count++;
            currentNode = currentNode.next;
        }

        return null;
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    findMid() {
        // Returns the middle node
        let count = 0;

        if(!this.head) {
            return null;
        }

        let currentNode = this.head;
        let midNode = this.head;

        while (currentNode.next){
  
            currentNode = currentNode.next;
            count++
            if (!(count % 2)) {
                midNode = midNode.next;
            }
        }

        return midNode;
        
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            //performance wise both are O(n), but the code for the single list is 
            //slightly harder to read than the double list.

        // Write your hypothesis on the time complexity of this method here
        //O(n), could have been written with cleaner code in O(n^2) time
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let length = this.listLength();

        const reversed = new SinglyLinkedList();

        for (let i = length - 1; i >= 0; i--) {
            let value = this.findNthNode(i).value;
            reversed.addToTail(value);
        }

        return reversed;
        // Write your hypothesis on the time complexity of this method here
        //O(n^2)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        if (!this.head){
            return null;
        }

        let currentNode = this.head;
        let nextNode = currentNode.next;
        currentNode.next = null;
        let nextNextNode
        while (currentNode) {

            if(!nextNode.next) {
                nextNode.next = currentNode;
                this.head = nextNode;
                return this;
            }
            nextNextNode = nextNode.next;
            nextNode.next = currentNode;
            currentNode = nextNode;
            nextNode = nextNextNode;
        }
        // Write your hypothesis on the time complexity of this method here

        //this executes in O(n) time instead of O(n^2); however, it mutates input
    }
}


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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        let frontNode = this.head;
        let backNode = this.tail;

        if(!frontNode) {
            return frontNode;
        }

        while(true){
            if (frontNode.next === backNode || frontNode === backNode) {
                return frontNode;
            }

            frontNode = frontNode.next;
            backNode = backNode.prev;
        }
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        if(!this.head){
            return null;
        }

        const reverse = new DoublyLinkedList();
        let currentNode = this.tail;

        while(currentNode) {
            reverse.addToTail(currentNode.value);
            currentNode = currentNode.prev
        }
        return reverse;

        // Write your hypothesis on the time complexity of this method here

        //O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        if (!this.head){
            return null;
        }

        let oldHead = this.head;
        let oldTail = this.tail;

        let currentNode = this.head;

        while (currentNode) {
            let prevNode = currentNode.prev;
            let nextNode = currentNode.next;
    
            currentNode.prev = nextNode;
            currentNode.next = prevNode;
    
            currentNode = nextNode;
        }

        this.head = oldTail;
        this.tail = oldHead;

        return this;
        // Write your hypothesis on the time complexity of this method here
        //this also executes in O(n); however, it mutates input

    }
}


module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
