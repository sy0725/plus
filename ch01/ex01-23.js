// 함수의 매개변수에 적용 ( 마지막 매개변수에만 사용 가능)
// function fn(a, b, ...args, c) {   (뒤에 추가 안된다.)
// function fn(a, b, ...args, ...rest) { (두개는 안된다.)

function fn(a, b, ...args) {
  console.log(a, b, args);
}

fn(); // undefined undefined []
fn(1); // 1 , undefined , []
fn(2, 3); // 2, 3 , []
fn(4, 5, 6); // 4, 5, [6]
fn(7, 8, 9, 10, 11); // 7 , 8 , [9, 10 , 11]

// 구조 분해 할당에서 사용

// 배열
var [first, second, ...rest] = [100, 200, 300, 400, 500];
console.log(first, second, rest); // 100, 200, [300, 400, 500]

// 객체

var user = {
  name: "김철수",
  age: 30,
  phone: "01022223333",
  address: "서울특별시 종로구 종로3길 17 D타워, 16-17층",
};

var { name, age, ...etc } = user;
console.log(name, age, etc); // 김철수 , 30 {address , phone 에 대한 값이 나옴}
