// import { callbackify } from "util";

// 链表结点
// [] 内存分配给我们一定数量的空间
// 存储空间连续性的问题  灵活性不够
// a[10]=[1,2,3,4,5,6,7,8,9];
// 1 101 99 5 a b c 

// 1 1001
// 1.next 指针，next指向下一个结点的位置 = 101

 export default class LinkedListNode {
    // linked 
    // list 
    // data collections data node 
    constructor(value,next = null) {
        this.value = value;
        this.next = next;

    }

    toString(callback) {
        return callback ? callback(this.value): `${this.value}`;
    }
}