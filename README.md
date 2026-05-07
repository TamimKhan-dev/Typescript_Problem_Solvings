# 🟦 TypeScript Fundamentals — Problems & Blogs
 
A collection of TypeScript problems and blog posts covering the core concepts — generics, union types, interfaces, classes, and utility types.
 
Everything is written from scratch. No copy-paste, no shortcuts.
 
---
 
## 📁 What's Inside
 
```
├── solution.ts         → All 7 coding problems solved
├── blog-1-any-vs-unknown.md     → Blog: why `any` is dangerous and `unknown` is better
└── blog-2-pick-and-omit.md      → Blog: how Pick & Omit keep your code DRY
```
 
---
 
## 🧩 The 7 Problems
 
### Problem 1 — Filter Even Numbers
A function that takes an array of numbers and returns only the even ones.
 
```ts
filterEvenNumbers([1, 2, 3, 4, 5, 6])
// → [2, 4, 6]
```
 
### Problem 2 — Reverse a String
Takes a string, returns it reversed. Simple but a good warmup.
 
```ts
reverseString("typescript")
// → "tpircsepyt"
```
 
### Problem 3 — Union Types & Type Guards
Defines a `StringOrNumber` union type and uses `typeof` to check whether the input is a string or a number.
 
```ts
checkType("Hello")  // → "String"
checkType(42)       // → "Number"
```
 
### Problem 4 — Generic Function with Constraints
A generic `getProperty` function that reads a key from an object. The key is constrained using `keyof` so TypeScript won't let you pass a key that doesn't exist on the object.
 
```ts
const user = { id: 1, name: "John Doe", age: 21 }
getProperty(user, "name")
// → "John Doe"
```
 
### Problem 5 — Interface + Object Spread
Defines a `Book` interface and a function that returns the same book object with an extra `isRead` property added.
 
```ts
toggleReadStatus({ title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 })
// → { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024, isRead: true }
```
 
### Problem 6 — Class Inheritance
A `Person` class with `name` and `age`. A `Student` class extends it and adds a `grade` property and a `getDetails()` method.
 
```ts
const student = new Student("Alice", 20, "A")
student.getDetails()
// → "Name: Alice, Age: 20, Grade: A"
```
 
### Problem 7 — Array Intersection
Takes two arrays and returns only the elements that appear in both.
 
```ts
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])
// → [3, 4, 5]
```
 
---
 
## ✍️ The 2 Blogs
 
### Blog 1 — [Why `any` Is a Type Safety Hole (And Why You Should Use `unknown` Instead)](./blog-1-any-vs-unknown.md)
 
`any` feels like a shortcut but it quietly removes everything TypeScript is supposed to protect you from. This blog explains the difference between `any` and `unknown`, and walks through type narrowing — the right way to handle data you don't fully control.
 
### Blog 2 — [How `Pick` and `Omit` Keep Your TypeScript Code DRY](./blog-2-pick-and-omit.md)
 
When you have one big interface but different parts of your app need different "slices" of it, rewriting those slices by hand is asking for trouble. This blog explains how `Pick` and `Omit` solve that by building new types directly from a master interface.
 
---
 
## 🛠 How to Run
 
You need [Node.js](https://nodejs.org/) and [ts-node](https://www.npmjs.com/package/ts-node) installed.
 
```bash
# Install ts-node if you haven't already
npm install -g ts-node typescript
 
# Run the solution file
ts-node solution.ts
```
 
---
 
## 🙋 About
 
I'm **Tamim** — a self-taught frontend developer from **Rajshahi, Bangladesh**.
 
I made this repo while learning TypeScript properly — not just using it as "JavaScript with types" but actually understanding why it works the way it does.
 
[![GitHub](https://img.shields.io/badge/GitHub-TamimKhan--dev-181717?style=flat&logo=github)](https://github.com/TamimKhan-dev)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-tamimkhan--dev-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/tamimkhan-dev)