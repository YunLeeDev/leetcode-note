/* The data structure of a Linked list*/
class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value?: number, next?: ListNode | null){
        // node value
        this.value = value === undefined ? 0 : value;
        // A reference to the next node
        this.next = next === undefined ? null : next;
    }
}

/* initialize linked list */
// initialize each node
const n0 = new ListNode(1);
const n1 = new ListNode(3);
const n2 = new ListNode(2);

// create a node reference
n0.next = n1;
n1.next = n2;

/**
 * inser node 
 * @param n - The location of the inserted node
 * @param P - Inserted nodes
 */
function insertNode(n: ListNode, P:ListNode): void{
    const n1 = n.next;
    P.next = n1;
    n0.next = P;
}

/**
 * Delete the first node after node n of the linked list
 * @param n - node that were deleted
 */
function removeNode(n:ListNode): void{
    if(!n.next) return;
    const p = n.next;
    const n1 = p.next;
    n.next = n1;
}

/**
 * Access a node in a linked list that has an index index
 * @param head - The head node of a linked list
 * @param index - The index of the accessed node
 * @return - Node accessed
 */
function access(head:ListNode | null, index: number):ListNode| null {
    for(let i = 0; i < index; i++){
        if(!head) return null;
        head = head.next;
    }
    return head;
}

/**
 * Find the first node in the linked list with the value of target
 * @param head - The head node of a linked list
 * @param target - The value of the finded node
 * @return - Return the index of the node
 */
function findNode(head:ListNode | null, target: number): number{
    let index = 0;
    while(head !== null){
        if(head.value === target){
            return index;
        }
        head = head.next;
        index++;
    }
    return index;
}


/* Doubly linked list node class */
class DoublyListNode {
    value: number;
    next: DoublyListNode | null;
    prev: DoublyListNode | null;
    constructor(value?: number, next?: DoublyListNode | null, prev?: DoublyListNode | null){
        this.value = value  ===  undefined ? 0 : value;
        this.next = next  ===  undefined ? null : next;  
        this.prev = prev  ===  undefined ? null : prev;
    }
}

/* Cricular Linked List */
// class CricularListNode{
//     value:number;
//     next: CricularListNode;
//     constructor(value: number, next: DoublyListNode){
//         this.value = value  ===  undefined ? 0 : value;
//     }
// }





