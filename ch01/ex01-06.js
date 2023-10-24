let foo = {
  name: "lee",
  age: 30,
  job: "teacher",
  married: true,
};

console.log(foo["name"], foo.age, foo.job, foo["married"]);
console.log(typeof foo, foo);

let strFoo = JSON.stringify(foo);
console.log(typeof strFoo, strFoo, strFoo.age);

let objFoo = JSON.parse(strFoo);
console.log(objFoo, typeof objFoo);
