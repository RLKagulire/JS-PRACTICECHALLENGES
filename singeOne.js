//array of integers nums, 
//every element appears twice except for one. 
//Find that single one.

function singleOne(nums) {
    const elementCount = {};
    for (const num of nums) {
      if (elementCount[num] === undefined) {
        elementCount[num] = 1;
      } else {
        elementCount[num]++;
      }
    }
    for (const num in elementCount) {
      if (elementCount[num] === 1) {
        return parseInt(num);
      }
    }
    return null;
  }
  
  const nums = [1, 2, 1, 2, 3, 4, 3, 4, 5, 6, 5];
  const singleElement = singleOne(nums);
  console.log(singleOne(nums)); // should log 6