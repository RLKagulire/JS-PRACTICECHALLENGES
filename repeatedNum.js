//array nums
//return true if any value appears at least twice
//return false if every element is distinct

function repeatedNum(nums) {
    const alreadyAppears = new Set();
      for (const num of nums) {
      if (alreadyAppears.has(num)) {
        return true;
      }
      alreadyAppears.add(num);
    }
    return false;
  }
  const nums1 = [2, 2, 3, 3, 4, 5, 6];
  const nums2 = [1, 2, 3, 4, 5, 6, 7];
  console.log(repeatedNum(nums1));
  console.log(repeatedNum(nums2));