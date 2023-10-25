function sum(a, b = 10) {
  return a + b;
}
console.log(sum(10, 20));
console.log(sum(30)); // 처음엔 오류가 나오지만 b=10을 할당 후 오류가 안나옴

// IIFE pattern (즉시 실행 함수)
// 배열
(function () {
  // 구조 분해 할당과 같이 사용
  function sum2([x = 0, y = 0] = []) {
    return x + y;
  }

  console.log(sum2([1, 2]));
  console.log(sum2());
  console.log(sum2([]));
  console.log(sum2([1]));
})();

// 객체
(function () {
  function sum({ x = 0, y = 0 } = {}) {
    return x + y;
  }

  console.log(sum());
  console.log(sum({}));
  console.log(sum({ x: 4 }));
  console.log(sum({ x: 5, y: 6 }));
})();
