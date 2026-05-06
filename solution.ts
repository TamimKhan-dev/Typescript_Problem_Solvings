// Problem 1: Filter Even number function.
const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((value: number) => value % 2 === 0);
};

// Problem 2: Reverse String function
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
