console.log(Math.min(10, 100)); // 10
console.log(Math.min(200, 100, 50, 60, 80, 30)); //30
console.log(Math.min(100, 20, 60, 50, 70)); // 20

// 지정한 배열의 요소 중 최소값을 반환
function smallest(nums) {
  if (!(nums instanceof Array)) {
    // nums = Array.prototype.slice.call(arguments);
    nums = [...arguments];
  }
  // var min = nums[0];
  // for (var i = 1; i < nums.length; i++) {
  //   // if (nums[i] < min) min = nums[i];
  //   min = Math.min(min, nums[i]);
  // }
  // return min;

  // return Math.min.apply(this, nums);
  return Math.min(...nums);
}

console.log(smallest([10, 100])); // 10
console.log(smallest([200, 100, 50, 60, 80, 30])); //30
console.log(smallest(100, 20, 60, 50, 70)); // 20
