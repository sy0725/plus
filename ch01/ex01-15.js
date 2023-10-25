var arr = ["zero", "one", "three", "four"];
var arr2 = arr.splice(2, 0, "two");
console.log("arr", arr);

// splice(start[, deleteCount[, item1[, item2[, ...]]]])
// 배열의 요소를 삭제, 교체, 추가하고 제거한 요소를 담은 배열을 반환한다.
// deleteCount 생략시 마지막까지 제거

// var arr2 = arr.splice(3, 1);
// var arr2 = arr.splice(1);  // zero 한개남음 하나빼고 다 없애버림
// var arr2 = arr.splice(); // 잘라낸게 없기에 빈배열만 반환

// slice([begin[, end]]) / 원본이 항상 유지가 된다.
// 배열의 begin부터 end까지(end 미포함) 요소를 복사해서 새로운 배열을 반환한다.
// begin 생략시 0부터
// begin이 음수일 경우 배열의 뒤에서 부터 복사
// end 생략시 마지막까지 복사
// 원본 데이터 유지

var arr2 = arr.slice(1, 3); // one, two
var arr2 = arr.slice(-3, -1); // two, three
var arr2 = arr.slice(2); // two, three, four
var arr2 = arr.slice(-2); // three four
var arr2 = arr.slice(); // 전체복사

console.log("arr", arr);
console.log("arr2", arr2);
console.log(arr == arr2); // false  = 값은 같더라도 메모리에 참조하는 주소가 다르기에
