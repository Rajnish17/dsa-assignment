function distributeCandies(candyType) {
    const uniqueCandies = new Set(candyType); // Create a Set to store unique candy types
    const maxCandies = candyType.length / 2; // Maximum number of candies Alice can eat
    return Math.min(uniqueCandies.size, maxCandies); // Return the minimum of unique candy types and maxCandies
  }
  
  const candyType = [1, 1, 2, 2, 3, 3];
  const result = distributeCandies(candyType);
  console.log(result); // Output: 3