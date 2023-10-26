// ex02-15.js 복사
//* this 미리 지정, partial 기능
var count = 0;
var counter = {
  count: 0,
  visit: function () {
    this.count++; // this = counter
    var visitN = function (n) {
      this.count += n;
    };
    var visit3 = visitN.bind(this, 3); // this = counter
    visit3();
    visit3();
  },
};

counter.visit();
counter.visit();
console.log("합계", counter.count);
