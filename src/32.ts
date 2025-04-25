// Problem: Given an array of integers nums, find the length of the longest consecutive elements subarray.
// Example 1:
// Input: nums = [10, 5, 2, 7, 20]
// Output: 4
// Explanation: The longest consecutive elements subarray is [10, 5, 2, 7].
// Example 2:
// Input: nums = [4, 3, 2, 1, 6, 2]
// Output: 4
// Explanation: The longest consecutive elements subarray is [1, 2, 3, 4].

function findLongestConsecutive(nums) {
  if (nums.length === 0) return 0;

  let maxLen = 1;
  const seenNumbers = new Set<number>();

  for (let num of nums) {
    if (!seenNumbers.has(num - 1)) {
      while (seenNumbers.has(num + 1)) {
        maxLen = Math.max(maxLen, num);
        num++;
      }
      seenNumbers.add(num);
    } else {
      continue;
    }
  }

  return maxLen;
}
