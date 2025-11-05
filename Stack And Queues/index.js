let stack = []

stack.push(0)
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
let top = stack[stack.length - 1]
console.log(top)

let queue = []
queue.push(1)
queue.push(2)
queue.push(2)
queue.shift()

console.log(queue)