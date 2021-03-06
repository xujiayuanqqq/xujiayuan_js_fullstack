import LinkedListNode from './LinkedListNode';
import LinkedLinkNode from './LinkedListNode';
// 怎样形成一个链表？把节点链接起来？
// 数据集合从开始到结束显示出来
// head
//     next
//     ......
// tail
export default class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new LinkedLinkNode(value);
        // {value, next}
        // 1. 空的 head为空
        // 2. 非空 tail .next null
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
            return this;
        }
    }

    prepend(value) {
        const newNode = new LinkedLinkNode(value,this.head);
        this.head = newNode;
        if(!this.tail) {
            this.tail = newNode;
        }
        return this;
    }
    
    delete(value) {
        if(!this.head) {
            return null;
        }

        let deletedNode = null;
        
        // 判断头节点
        while(this.head && this.head.value === value) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if(currentNode !== null) {
            while(currentNode.next) {
                if(currentNode.next.value === value) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }
        return deletedNode;
    }

    find({value = undefined, callback = undefined}) {
        if(!this.head) {
            return null;
        }

        let currentNode = this.head;

        while(currentNode) {
            if(callback && callback(currentNode.value)) {
                return callback;
            }

            if(value !== undefined && currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }
        return null;
    }

    toArray() {
        const nodes = [];
        let currentNode = this.head;
        while(currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    // 返回节点的value
    toString(callback) {
        return this.toArray().map(node => node.toString(callback)).toString();
    }
}