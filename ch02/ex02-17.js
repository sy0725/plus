// ex02-14.js 복사
var name = "global";
function returnName() {
  return this.name;
}

// 일반적인 함수로 호출(함수명())
console.log(returnName());

// 객체의 메소드로 호출(객체.메소드명())
var kim = new Object();
kim.name = "김철수";
kim.age = 30;
kim.getName = returnName;

var lee = {
  name: "이영희",
  age: 40,
  getName: returnName,
};

// 객체를 생성해서 반환하는 함수(생성자)
//* 1) 전역변수로 작동한다는 단점. 2) undefined 반환된다는 문제점
function Person(name, age) {
  // var obj = { };

  if (!(this instanceof Person)) {
    return new Person(name, age);
  }

  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  };

  // return obj;
}

var kim = new Person("김철수", 30);
var lee = new Person("김철수", 30);
var hong = Person("홍길동", 40);

console.log(kim.age, kim.getName());
console.log(lee.age, lee.getName());
console.log(hong.age, hong.getName());

//* 내가 원하는 객체를 명시적으로 지정해서 넘긴다
console.log(kim.getName(), kim.getName.call(window));
console.log(lee.getName(), lee.getName.apply(kim));
