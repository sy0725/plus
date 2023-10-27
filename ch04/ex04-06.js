// ex02-21.js 복사

var isPrime = function (num) {
  // 소수 판별 코드
  var prime = true;
  for (let i = 2; i <= num / 2; i++) {
    if (!(num % i)) {
      prime = false;
      break;
    }
  }
  return prime;
};

isPrime = isPrime.memoize();

console.time("소요시간");
console.log("3 -> ", isPrime(3));
console.log("4 -> ", isPrime(4));
console.log("5 -> ", isPrime(5));
console.log("6 -> ", isPrime(6));
console.log("7 -> ", isPrime(7));
console.log("8 -> ", isPrime(8));
console.log("9 -> ", isPrime(9));
console.log("1000000007 -> ", isPrime(1000000007));
console.log("1000000007 -> ", isPrime(1000000007));
console.log("1000000007 -> ", isPrime(1000000007));
console.timeEnd("소요시간");
