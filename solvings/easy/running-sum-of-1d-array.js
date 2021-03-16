const sum = (array) => array.length ? array.reduce((acc, val) => acc + val) : 0;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = (nums) => {
    return nums.map((n, idx) => sum(Array.from(nums).splice(0, idx)) + n);
}
