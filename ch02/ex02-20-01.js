var todolist = [
  {
    _id: 1,
    title: "Javascript 공부",
    done: true,
  },
  {
    _id: 2,
    title: "Typescript 공부",
    done: false,
  },
  {
    _id: 3,
    title: "React 공부",
    done: false,
  },
  {
    _id: 4,
    title: "React 프로젝트",
    done: true,
  },
];

// forEach() 완료된 할일 목록
var doneList = [];
todolist.forEach(function (elem) {
  if (elem.done === true) {
    doneList.push(elem);
  }
});
console.log("forEach() 완료된 할일 목록", doneList);

// filter() 완료된 할일 목록
var doneList = todolist.filter((elem) => elem.done === true);
console.log("filter() 완료된 할일 목록", doneList);

// map() 남은 할일 목록
var remainList = todolist
  .map(function (elem) {
    if (elem.done === false) {
      return elem.title;
    }
  })
  .filter((elem) => {
    return elem !== undefined;
  });
console.log("map() 남은 할일 목록", remainList);

// reduce() 남은 할일 수
var remainList = todolist.reduce((acc, curr) => (acc += !curr.done), 0);
console.log("reduce() 남은 할일 수", remainList);

// find() _id=2인 할일
var todo = todolist.find(({ _id }) => _id === 2).title;
console.log("find() _id=2인 할일", todo);

// find() _id=3인 할일의 index
var todoIndex = todolist.indexOf(todolist.find(({ _id }) => _id === 3));
console.log("find() _id=3인 할일의 index", todoIndex);

// some() 남은 할일이 하나라도 있는가?
var hasTodo = todolist.some((todo) => !todo.done);
console.log("some() 남은 할일이 하나라도 있는가?", hasTodo);

// every() 할일이 모두 완료 되었는가?
var busy = todolist.every((todo) => todo.done);
console.log("every() 할일이 모두 완료 되었는가?", busy);
