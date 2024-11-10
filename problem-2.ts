const removeDuplicates = (arr: number[]): number[] => {
    return [...new Set(arr)];
  };
  
  const response = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  
  console.log(response);
  