
var MinStack = function() {
    this.stack = []
//    this.minStack = []
};

MinStack.prototype.push = function(val) {
    this.stack.push(val)
};

MinStack.prototype.pop = function() {
    const popped = this.stack.pop();
    
    return popped; 
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

MinStack.prototype.getMin = function() {
    return Math.min(...this.stack)
};