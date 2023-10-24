//stack - Last in First out
var stack = [];
//100, 200, 300 저장
stack.push(100);
stack.push(200);
stack.push(300);
//300, 200, 100 출력
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

//queue - First in First out
var queue = [];
//100, 200, 300 저장
queue.push(100);
queue.push(200);
queue.push(300);

//100, 200, 300 출력
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

console.log(stack, queue);
