const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        //for queues with no entries
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        //for queues with 1 or more
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return this.length;


        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        const currentNode = this.head;

        //empty queues return null;
        if(!this.length) {
            return null;
        }

        //fixes the tail if queue only has one value
        if(this.length === 1) {
            this.tail = currentNode.next;
        }
        //fixes the head to the next node
        this.head = currentNode.next;

        this.length--;

        return currentNode.value;
        
        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
