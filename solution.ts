// Problem 1: Filter Even number function.
const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((value: number) => value % 2 === 0);
};

// Problem 2: Reverse String function
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

// Problem 3: String Or Number Checker
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber) => {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  }
};

// Problem 4: Get Property
const getProperty = <T,K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};