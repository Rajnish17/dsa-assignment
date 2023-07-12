function findLHS(nums) {
    const frequencyMap = new Map();
    
    // Count the frequency of each number
    for (let num of nums) {
      if (frequencyMap.has(num)) {
        frequencyMap.set(num, frequencyMap.get(num) + 1);
      } else {
        frequencyMap.set(num, 1);
      }
    }
    
    let maxSubsequenceLength = 0;
    
    // Find the maximum subsequence length
    for (let [num, count] of frequencyMap) {
      if (frequencyMap.has(num + 1)) {
        maxSubsequenceLength = Math.max(maxSubsequenceLength, count + frequencyMap.get(num + 1));
      }
    }
    
    return maxSubsequenceLength;
  }
  
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  const result = findLHS(nums);
  console.log(result); // Output: 5
  