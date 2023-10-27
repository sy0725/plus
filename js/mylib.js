// 배열에 min 추가
Array.prototype.min = function () {
  return Math.min(...this);
};

Function.prototype.memo = function (key) {
  //# 사이드 이펙트: 호출되는 함수 내부에서 쓰는 this <- this._cache 외부 상태
  this._cache = this._cache || {};
  if (this._cache[key] !== undefined) {
    return this._cache[key];
  } else {
    return (this._cache[key] = this(key));
  }
};

// 모든 함수에 memoization 기는ㅇ 추가
// isPrime(3) -> 캐시 x
// isPrime = isPrime.memoize()
// isPrime(1000000007) -> 캐시 o
Function.prototype.memoize = function () {
  var fn = this; // isPrime = this
  return function () {
    return fn.memo.apply(fn, arguments);
  };
};
