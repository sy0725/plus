function fn(n1, n2) {
  // console.log(n1, n2);
  // 모든 인자값의 합계를 출력
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("합계", sum);
}

fn();
fn(10);
fn(10, 20);
fn(10, 20, 30);
fn(10, 20, 30, 40, 50);
