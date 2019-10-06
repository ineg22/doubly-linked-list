const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node();

        node.data = data;

        if (this.length === 0) {
            this._head = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
        }
        this._tail = node;
        this.length++;

        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        let currNode = this._head;

        for (let i = 0; i < index; i++) {
            currNode = currNode.next;
        }

        return currNode.data;
    }

    insertAt(index, data) {
        let node = new Node();
        node.data = data;
        let currNode = this._head;

        if (index === this.length) {
            this.append(data);
            return this;
        }

        for(let i = 0; i <= index; i++) {
            if (i == index) {
                node.prev = currNode.prev;
                node.next = currNode;
                currNode.prev.next = node;
                currNode.prev = node;
                this.length++;
            } else {
                currNode = currNode.next;
            }
        }
        return this;
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        } else return false;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        let currNode = this._head;

        for(let i = 0; i <= index; i++) {
            if (this.length === 1 && index === 0) {
                this._head = null;
                this._tail = null;
                this.length = 0;
                return this;
            } else if ( i === index) {
                currNode.prev.next = currNode.next;
                currNode.next.prev = currNode.prev;
                this.length--;
            } else {
                currNode = currNode.next;
            }
        }
        return this;
    }

    reverse() {
        let currNode = this._head;
        this._head = this._tail;
        this._tail = currNode;

        for(let i = 0; i < this.length; i++) {
            let buffer = currNode.next;
            currNode.next = currNode.prev;
            currNode.prev = buffer;
            
            currNode = currNode.prev;
        }

        return this;
    }

    indexOf(data) {
        let currNode = this._head;

        for (let i = 0; i < this.length; i++) {
            if (currNode.data === data) {
                return i;
            } else {
                currNode = currNode.next;
            }
        }

        return -1;
    }
}

module.exports = LinkedList;
