const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/


//time complexity hypothesis
//I think singlelinked will have O(1) for add to head and O(n) for tail
//I think doublelinked will have O(1) for both

//tests seem to confirm hypothesis as only single linked addToTail seemed to increase with the number of values

// Your code here

function benchmarkAddToHead (){
    const list = new LinkedList();

    start = Date.now();

    for(let i = 0; i < 100000; i++){
        startTime = Date.now();
        list.addToHead(i);
        endTime = Date.now();
        console.log(endTime - startTime)
        // list.print()
    }

    console.log(Date.now() - start)
}

function benchmarkAddToTail (){
    const list = new LinkedList();

    start = Date.now();

    for(let i = 0; i < 300000; i++){
        startTime = Date.now();
        list.addToTail(i);
        endTime = Date.now();
        console.log(endTime - startTime)
        // list.print()
    }

    console.log(Date.now() - start)
}

function benchmarkAddToHeadDouble (){
    const list = new DoublyLinkedList();

    start = Date.now();

    for(let i = 0; i < 300000; i++){
        startTime = Date.now();
        list.addToHead(i);
        endTime = Date.now();
        console.log(endTime - startTime)
        // list.print()
    }

    console.log(Date.now() - start)
}

function benchmarkAddToTailDouble (){
    const list = new DoublyLinkedList();

    start = Date.now();

    for(let i = 0; i < 300000; i++){
        startTime = Date.now();
        list.addToTail(i);
        endTime = Date.now();
        console.log(endTime - startTime)
        // list.print()
    }

    console.log(Date.now() - start)
}

// benchmarkAddToHead()
// benchmarkAddToTail()

benchmarkAddToHeadDouble();
// benchmarkAddToTailDouble();