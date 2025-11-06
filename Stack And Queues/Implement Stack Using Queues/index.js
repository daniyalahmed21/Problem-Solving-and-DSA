// var MyStack = function () {
//   this.q1 = [];
//   this.q2 = [];
// };

// MyStack.prototype.push = function (x) {
//   this.q1.push(x);
// };

// MyStack.prototype.pop = function () {
//   let n = this.q1.length;
//   for (let i = 0; i < n - 1; i++) {
//     let elem = this.q1.shift();
//     this.q2.push(elem);
//   }
//   let poppedElem = this.q1.shift();
//   for (let i = 0; i < n - 1; i++) {
//     let elem = this.q2.shift();
//     this.q1.push(elem);
//   }
//   return poppedElem;
// };

// MyStack.prototype.top = function () {
//   let n = this.q1.length;
//   for (let i = 0; i < n - 1; i++) {
//     let elem = this.q1.shift();
//     this.q2.push(elem);
//   }
//   let poppedElem = this.q1.shift();
//   this.q2.push(poppedElem);
//   for (let i = 0; i < n; i++) {
//     let elem = this.q2.shift();
//     this.q1.push(elem);
//   }
//   return poppedElem;
// };

// MyStack.prototype.empty = function () {
//     return this.q1.length === 0 ? true : false
// };


var MyStack = function () {
    this.q1 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    let n = this.q1.length
    for (let i = 0; i < n - 1; i++) {
        let temp = this.q1.shift()
        this.q1.push(temp)
    }
    return this.q1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    let n = this.q1.length
    let topElement;
    for (let i = 0; i < n; i++) {
        let temp = this.q1.shift()
        this.q1.push(temp)
        topElement = temp
    }
    return topElement;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.q1.length > 0 ? false : true
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(3);
console.log(obj);
var param_2 = obj.pop();
console.log(param_2);
var param_3 = obj.top();
console.log(param_3);
console.log(obj);
//  var param_4 = obj.empty()
