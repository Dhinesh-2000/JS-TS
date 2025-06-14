function removeDuplicatesAndFlatten() {
    // Declare and flatten the array inside the function
    const arr = [1, 1, 2, 3, 4, 5, [[[8]]], [9]].flat(Infinity)
    
    // Remove duplicates using filter and assign it to a variable
    const uniqueArray = arr.filter((item, index, self) => self.indexOf(item) === index);
  
    return uniqueArray.join();
  }
  
  // Test case
  console.log(removeDuplicatesAndFlatten()); // Output: [1, 2, 3, 4, 5, 8, 9]
  