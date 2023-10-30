// An array of integers nums and an integer target,
//return indices of the two numbers such that they add up to the target.
//Each input has exactly one solution.
//No using the same element twice.
//Create an empty object to store numbers and their indices
  // If the difference of target and current number is found in the map, return the indices
   // Store the current number and its index in the map
   // If no solution is found, return an empty array
function twoSum(nums, target) {
    const numsIndexObj = {}; 
    for (let i = 0; i < nums.length; i++) {
      const currentNum = nums[i];
      const difference = target - currentNum;
      if (numsIndexObj[difference] !== undefined) {
        return [numsIndexObj[difference], i];
      }
    numsIndexObj[currentNum] = i;
    }    
    return [];
  }
    const nums = [1, 2, 4, 7,10,13];
    const target = 15;
    const result = twoSum(nums, target);
console.log(result);