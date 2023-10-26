// 고등학교 성적관리 생성자 함수(총점과 평균 계산)

(function () {
  class HighSchool {
    constructor(kor, eng) {
      // 이름은 정해져있기에 constructor 꼭 사용
      this.kor = kor;
      this.eng = eng;
    }

    static getTotal() {
      return 100;
    }
    sum = function () {
      return this.kor + this.eng;
    };

    avg = function () {
      return Math.round(this.sum() / 2);
    };
  }

  var s1 = new HighSchool(100, 91);
  console.log(s1.sum());
  console.log(s1.avg());

  // 대학교 성적관리 생성자 함수(총점, 평균, 학점)

  class College extends HighSchool {
    constructor(kor, eng) {
      super(kor, eng);
    }

    grade() {
      var grade = "F";
      var avg = this.avg();
      if (avg >= 90) {
        grade = "A";
      } else if (avg >= 80) {
        grade = "B";
      } else if (avg >= 70) {
        grade = "C";
      } else if (avg >= 60) {
        grade = "D";
      }
      return grade;
    }
  }

  // 학점 계산하는거

  var s2 = new College(80, 71);
  console.log(s2.sum());
  console.log(s2.avg());
  console.log(s2.grade());
})();
