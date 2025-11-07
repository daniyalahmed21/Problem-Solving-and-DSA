var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length > 0) {
    let lastMinVal = Number(this.stack[this.stack.length - 1].split(",")[1]);
    console.log(lastMinVal)
    if (lastMinVal < val) {
      this.stack.push(`${val},${lastMinVal}`);
    } else {
      this.stack.push(`${val},${val}`);
    }
  } else {
    this.stack.push(`${val},${val}`);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return Number(this.stack[this.stack.length - 1].split(",")[0]);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return Number(this.stack[this.stack.length - 1].split(",")[1]);
};

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
