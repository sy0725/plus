var sum = function (x, y, z) {
  return x + y + z;
};

// function 에 partial 기능 추가(수업중 가장 어려운 코드가 될것이다.) 온전하게 이해하면 다 이해했다는거
// prototype, this, arguments, 고차 함수, apply, closure

Function.prototype.partial = function () {
  var fn = this; // fn = sum 왜냐 ? partial로 호출되어서
  var preArgs = [...arguments]; // [20 , 80]
  return function () {
    // [20, 80, 30]
    var args = [...preArgs, ...arguments];
    return fn.apply(this, args);
  };
};

var sum100 = sum.partial(20, 80);
console.log(sum100(30), sum100(50)); // 130 150
