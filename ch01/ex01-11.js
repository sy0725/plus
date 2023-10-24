var arr = [300, 400];
arr[2] = 500;
arr.unshift(200);
arr.unshift(100);
console.log(arr);

// 배열의 모든 요소 출력(for)
console.log("for");
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// 배열의 모든 요소 출력(for-in)
console.log("for-in");
for (let i in arr) {
  // i - 속성명 arr - 객체명
  console.log(i, arr[i]);
}

// 배열의 모든 요소 출력(for-of)
console.log("for-of");
for (let elem of arr) {
  console.log(elem);
}

// 배열의 모든 요소 출력(forEach())
console.log("forEach()");
arr.forEach(function (elem, i) {
  console.log(i, elem);
});
