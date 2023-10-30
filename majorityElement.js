//array nums of size n
//return the majority element;appears more than ⌊n / 2⌋ times
//apply for loop
//use if...else if...else condition

function majorityElement(nums) {
  let majority = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
      count = 1;
    } else if (majority === nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
}

const nums = [1, 2, 2, 3, 4, 3, 2, 5, 2, 3];
console.log(majorityElement(nums)); // should log 2
