// 전개 연산자
var colors = ["two", "three", "four"];
// var newColors = colors;
// colors.unshift("one");
// newColors.push("five");

var newColors = ["one", ...colors, "five"]; // 복사 뿐만아니고 추가도 가능하다 , 새로운 배열이 만들어 진다
console.log(newColors, colors === newColors); // ['one',"two", "three", "four", 'five'] , false

if (colors !== newColors) {
  console.log("리렌더링"); // 리렌더링
}

var user = { name: "김철수", age: 30, done: false };
var newUser = { ...user, phone: "01088888888", age: user.age + 1, done: true }; // 안에 값도 바꿀 수 있다.

console.log(newUser, user === newUser); // { name: "김철수", age: 31 , phone : '0108888888' , done : true} , false // false 의 이유는 새로운 배열이 만들어져서

if (user !== newUser) {
  console.log("리렌더링"); // 리렌더링
}
// 함수에서 사용

function sum(x, y) {
  console.log(x + y);
}
var numbers = [10, 20];
sum(numbers[0], numbers[1]); // 30
sum(...numbers); // 30

// 배열 결합
var arr1 = [100, 200];
var arr2 = [300, 400];
var arr3 = [...arr1, ...arr2];
console.log(arr3); // [100, 200, 300, 400]

// 객체 결합
var obj1 = { id: 1, title: "js 공부", done: false };
var obj2 = { id: 2, content: "할 수 있 다!", date: "2023-10-25" };
var obj3 = { ...obj1, ...obj2 };
console.log(obj3); // 객체가 합해져서 들어온다 , id 는 덮어씌어저서 2로 변경
