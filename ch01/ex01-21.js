// 구조 분해 할당
// 배열
var colors = ["yellow", "green", "blue"];
var [one, two, three, four] = colors; // 배열에 없는 값을 넣으면 undefined 가 나온다. 할당하고 싶으면 아래 확인.
console.log(one, two, three, four); // yellow, green, blue, undefined

// 객체
var kim = { userName: "김철수", userAge: 35 };
var { userName, userAge: age } = kim;
console.log(userName, age);

// React
// const countState = useState(0);
// countState[1](countState[0] + 1); // 구조분해할당 전

// const [count, setCount] = useState(0); // 구조분해할당 후
// countState[1](count + 1);

// 선언된 변수에 적용
var first, second;
[first, second] = [100, 200, 300];
console.log(first, second);
({ first, second } = { first: "orange", second: "green", third: "yellow" });
console.log(first, second);

// 기본값 할당(undefined 대체)
// var { userName, userAge } = { userName: "이영희", userAge: 25 };  // 이영희 25
// var { userName, userAge } = { userName: "이영희" };  // 이영희 undefined
var { userName, userAge = 20 } = { userName: "이영희" }; // 이영희 20
console.log(userName, userAge);

// 변수명 변경과 기본값 할당
var { userName: accountName = "게스트", userAge: age = 20 } = { userAge: 30 };
console.log(accountName, age); // 게스트 30

// 변수값 교환
var a = 100;
var b = 200;
var temp = a;
a = b;
b = temp;
console.log(a, b); // 200 , 100

// 변수값 교환(구조 분해 할당)
[a, b] = [b, a];
console.log(a, b); // 100, 200

// 복합 객체에서 사용
var userList = [
  {
    name: "김철수",
    age: 30,
    course: {
      name: "멋사 6기",
    },
  },
  {
    name: "이영희",
    age: 35,
    course: {
      name: "멋사 8기",
    },
  },
];

// 이름과 코스명만 출력
for (var elem of userList) {
  console.log(elem.name, elem.course.name); // 김철수 멋사 6기 , 이영희 멋사 8기
}

// 구조 분해 할당
for (var {
  name,
  course: { name: courseName },
} of userList) {
  console.log(name, courseName); // 김철수 멋사 6기 , 이영희 멋사 8기
}
