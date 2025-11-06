// var MyQueue = function () {
//   this.s1 = [];
//   this.s2 = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MyQueue.prototype.push = function (x) {
//   this.s1.push(x);
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.pop = function () {
//   let n = this.s1.length;
//   let poppedElement;
//   for (let i = 0; i < n - 1; i++) {
//     let temp = this.s1.pop();
//     this.s2.push(temp);
//   }
//   poppedElement = this.s1.pop();
//   for (let i = 0; i < n - 1; i++) {
//     let temp = this.s2.pop();
//     this.s1.push(temp);
//   }
//   return poppedElement;
// };

// /**
//  * @return {number}
//  */
// MyQueue.prototype.peek = function () {
//   let n = this.s1.length;
//   let frontElement;
//   for (let i = 0; i < n; i++) {
//     let temp = this.s1.pop();
//     this.s2.push(temp);
//     frontElement = temp;
//   }
//   for (let i = 0; i < n; i++) {
//     let temp = this.s2.pop();
//     this.s1.push(temp);
//   }
//   return frontElement;
// };

// /**
//  * @return {boolean}
//  */
// MyQueue.prototype.empty = function () {
//   return this.s1.length > 0 ? false : true;
// };


var MyQueue = function () {
  this.s1 = [];
  this.s2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.s2.length === 0 ){
     while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
 if (this.s2.length === 0 ){
     while (this.s1.length > 0) {
      this.s2.push(this.s1.pop());
    }
  }
  return this.s2[this.s2.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
 return this.s1.length === 0 && this.s2.length === 0;
};

let myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// console.log(myQueue.peek()); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue);
console.log(myQueue.empty()); // return false
console.log(myQueue);

console.log(myQueue.empty()); // return false
