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
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

// Problem 5: Toggle Reading Status
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book): Book & { isRead: true } => {
  return { ...obj, isRead: true };
};

// Problem 6: Get Details
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7: Find Duplicates
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
   return arr1.filter((value: number) => arr2.includes(value))
};