const sumArray = (arr: number[]): number => {
    const sum = arr.reduce((a, b) => a + b, 0);
    return sum;
  };
  
  const result = sumArray([1, 2, 3, 4, 5]);
  
  console.log(result);
  