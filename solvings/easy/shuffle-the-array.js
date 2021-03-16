/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
  const result = [];
  Array.from(nums).slice(0, n).forEach((num, idx) => {
      result.push(num);
      result.push(nums[idx + n])
  });
  return result
};
