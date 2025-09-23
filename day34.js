class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        // Push to minStack the smaller value between val and current min
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop() {
        const val = this.stack.pop();
        if (val === this.getMin()) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); 
minStack.pop();
console.log(minStack.top());    
console.log(minStack.getMin()); 
