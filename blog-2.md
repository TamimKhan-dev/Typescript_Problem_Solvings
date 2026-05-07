# How `Pick` and `Omit` Keep Your TypeScript Code DRY
 
## Introduction
 
In most projects, you have one big interface that describes a full object — like a `User` with an id, name, email, password, role, and more. But different parts of your app only need a few of those fields.
 
The common mistake is to create new, separate interfaces for every situation. You end up repeating yourself, and when something changes in the original interface, you have to update it in five different places.
 
TypeScript's `Pick` and `Omit` utility types solve this cleanly. This post explains what they do, how they work, and why using them keeps your code DRY (Don't Repeat Yourself).
 
---
 
## The Problem: Repeating Yourself
 
Say you have this interface:
 
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
}
```
 
Now you need:
- A type for the **public profile** (id, name, role — no password)
- A type for the **login form** (email, password only)
- A type for the **admin panel** (everything except password)
Without utility types, you might write three separate interfaces:
 
```typescript
interface PublicProfile {
  id: number;
  name: string;
  role: string;
}
 
interface LoginForm {
  email: string;
  password: string;
}
 
interface AdminView {
  id: number;
  name: string;
  email: string;
  role: string;
  createdAt: Date;
}
```
 
This works — but now if you rename `role` to `userRole` in `User`, you have to remember to update it in all three places. That is the problem `Pick` and `Omit` fix.
 
---
 
## `Pick`: Take Only What You Need
 
`Pick<T, K>` creates a new type by selecting only the fields you want from an existing type.
 
```typescript
type PublicProfile = Pick<User, "id" | "name" | "role">;
 
// Result is equivalent to:
// {
//   id: number;
//   name: string;
//   role: string;
// }
```
 
Now `PublicProfile` is built directly from `User`. If `User` changes, `PublicProfile` updates automatically.
 
Here is another example:
 
```typescript
type LoginForm = Pick<User, "email" | "password">;
 
function login(credentials: LoginForm) {
  console.log(credentials.email, credentials.password);
}
```
 
You did not write a new interface. You just said "give me these two fields from `User`." Clean and clear.
 
---
 
## `Omit`: Remove What You Don't Want
 
`Omit<T, K>` is the opposite of `Pick`. Instead of choosing fields to keep, you choose fields to remove.
 
```typescript
type AdminView = Omit<User, "password">;
 
// Result is equivalent to:
// {
//   id: number;
//   name: string;
//   email: string;
//   role: string;
//   createdAt: Date;
// }
```
 
This is useful when you want most of a type but need to exclude one or two sensitive or irrelevant fields.
 
You can omit multiple fields too:
 
```typescript
type SafeUser = Omit<User, "password" | "createdAt">;
```
 
---
 
## Real-World Usage
 
These utility types are especially useful when working with API responses or component props.
 
**Example: React component props**
 
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
}
 
// The card component only needs a few fields — no need for a full new interface
type UserCardProps = Pick<User, "id" | "name" | "role">;
 
function UserCard({ id, name, role }: UserCardProps) {
  return <div>{name} — {role}</div>;
}
```
 
**Example: API response vs form input**
 
```typescript
// When creating a user, we don't have an id or createdAt yet
type CreateUserInput = Omit<User, "id" | "createdAt">;
 
function createUser(input: CreateUserInput) {
  // input has name, email, password, role — but not id or createdAt
}
```
 
This is a very common pattern when working with forms and database models.
 
---
 
## Why This Is "DRY"
 
DRY stands for Don't Repeat Yourself. The idea is simple: if you write the same information in multiple places, every future change requires updating all those places. That is easy to forget, and forgetting causes bugs.
 
With `Pick` and `Omit`, your `User` interface is the single source of truth. All other types are just "slices" of it. When something changes in `User`, all the derived types stay in sync automatically — you don't have to do anything extra.
 
---
 
## Conclusion
 
`Pick` and `Omit` are small tools, but they solve a real problem that shows up in almost every TypeScript project. Instead of writing new interfaces for every use case, you build them from a master interface.
 
`Pick` lets you say "I only need these fields." `Omit` lets you say "I want everything except these." Both approaches keep your code pointing back to one source of truth, which makes your codebase easier to maintain as it grows.
 
If you find yourself copy-pasting fields from one interface to another, that is usually a sign that `Pick` or `Omit` would be a cleaner solution.