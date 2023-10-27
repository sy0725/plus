function syncFn1() {
  console.log("syncFn1 작업 시작");

  console.log("syncFn1 작업 종료");
  return "syncF1의 결과물";
}

function syncFn2(f1Result) {
  console.log("syncFn2 작업 시작", f1Result);
  // ...
  console.log("syncFn2 작업 종료");
  return "syncF2의 결과물";
}

/* (function () {
  const result = syncFn1();
  syncFn2(result);
  console.log('테스트 종료.');
})(); */

function asyncFn1(resolve) {
  console.log("syncFn1 작업 시작");
  setTimeout(function () {
    // ...
    console.log("syncFn1 작업 종료");
    resolve("syncF1의 결과물");
  }, 3000);
}

function asyncFn2(f1Result, resolve) {
  console.log("syncFn2 작업 시작", f1Result);
  setTimeout(function () {
    console.log("syncFn2 작업 종료");
    resolve("syncF2의 결과물");
  }, 2000);
}

/* (function () {
  asyncFn1(function (result) {
    asyncFn2(result, function (f2Result) {
      console.log(f2Result);
    });
  });
  console.log('테스트 종료.');
})(); */

// ES6 Promise
function promiseFn1(resolve) {
  return new Promise(function (resolve, reject) {
    console.log("promiseFn1 작업 시작");
    setTimeout(function () {
      // ...
      console.log("promiseFn1 작업 종료");
      resolve("promiseF1의 결과물");
    }, 3000);
  });
}

function promiseFn2(f1Result, resolve) {
  return new Promise(function (resolve, reject) {
    console.log("promiseFn2 작업 시작", f1Result);
    setTimeout(function () {
      console.log("promiseFn2 작업 종료");
      resolve("promiseF2의 결과물");
    }, 2000);
  });
}

// Promise ES6 2015
// (function () {
//   promiseFn1()
//     .then(promiseFn2)
//     .then(() => console.log('작업종료.'))
//     .catch((err) => console.error(err));
//   console.log('이벤트 처리 완료.');
// })();

// async/awiat ES2017
async function working() {
  // 대신 함수 전체가 비동기
  var f1Result = await promiseFn1(); // promise 반환하는 함수 앞 await. 동기 -> 순차적으로 실행
  var f2Result = await promiseFn2(f1Result);
  console.log("작업 처리 완료.", f2Result);
}

(function () {
  working();
  console.log("이벤트 처리 완료.");
})();
