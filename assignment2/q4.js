function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    let i = 0;
    
    while (i < flowerbed.length) {
      if (
        flowerbed[i] === 0 && // Current plot is empty
        (i === 0 || flowerbed[i - 1] === 0) && // Previous plot is empty or out of bounds
        (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) // Next plot is empty or out of bounds
      ) {
        flowerbed[i] = 1; // Plant a flower
        count++; // Increment the count of planted flowers
        
        if (count >= n) {
          return true; // Reached the required number of planted flowers
        }
      }
      
      i++; // Move to the next plot
    }
    
    return false; // Cannot plant the required number of flowers
  }
  
  const flowerbed = [1, 0, 0, 0, 1];
  const n = 1;
  const result = canPlaceFlowers(flowerbed, n);
  console.log(result); // Output: true
  