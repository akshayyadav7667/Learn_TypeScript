
// var num:number=34
// console.log(num)

// var num1:number=34.54
// console.log(num1)
// console.log(typeof num1)






// let data:string |null= null;

// console.log(data);
// console.log(typeof data)






let x: any = 10;
x = "hello";
x = true;


console.log(x)
console.log(typeof x)




// Perfect 👍
// Now let’s learn **TypeScript Data Types** in a **clean, structured, beginner-friendly way**, with **examples, mistakes, and interview tips**.

// I’ll explain in **simple English**, step by step (JS → TS style).

// ---

// # 📘 Data Types in TypeScript (Complete Guide)

// ---

// ## 🔹 Why Data Types Matter in TS?

// In JavaScript:

// ```js
// let age = "22"; // ❌ no error
// ```

// In TypeScript:

// ```ts
// let age: number = "22"; // ❌ error
// ```

// 👉 Data types **prevent bugs before runtime**

// ---

// # 🔰 1. Primitive Data Types

// ---

// ## 1️⃣ `number`

// Used for **integers & decimals**

// ```ts
// let age: number = 22;
// let price: number = 99.99;
// ```

// ❌ Wrong:

// ```ts
// let age: number = "22";
// ```

// ---

// ## 2️⃣ `string`

// Used for **text**

// ```ts
// let name: string = "Akshay";
// let msg: string = `Hello ${name}`;
// ```

// ---

// ## 3️⃣ `boolean`

// Used for **true / false**

// ```ts
// let isLoggedIn: boolean = true;
// ```

// ---

// ## 4️⃣ `null`

// Represents **no value**

// ```ts
// let data: null = null;
// ```

// 📌 Mostly used with **union types**

// ```ts
// let user: string | null = null;
// ```

// ---

// ## 5️⃣ `undefined`

// Value not assigned

// ```ts
// let value: undefined = undefined;
// ```

// ---

// # 🔰 2. Special Data Types

// ---

// ## 6️⃣ `any` (❌ Avoid)

// Disables type checking

// ```ts
// let x: any = 10;
// x = "hello";
// x = true;
// ```

// 📌 Like pure JavaScript

// ---

// ## 7️⃣ `unknown` (✅ Safer)

// ```ts
// let value: unknown = "Hello";

// if (typeof value === "string") {
//   console.log(value.toUpperCase());
// }
// ```

// 📌 Must check type before use

// ---

// ## 8️⃣ `void`

// Used in functions that **return nothing**

// ```ts
// function logMessage(): void {
//   console.log("Hello");
// }
// ```

// ---

// ## 9️⃣ `never`

// Function that **never ends**

// ```ts
// function error(msg: string): never {
//   throw new Error(msg);
// }
// ```

// OR

// ```ts
// function infinite(): never {
//   while (true) {}
// }
// ```

// ---

// # 🔰 3. Reference Data Types

// ---

// ## 🔟 Array

// ### Method 1

// ```ts
// let nums: number[] = [1, 2, 3];
// ```

// ### Method 2

// ```ts
// let names: Array<string> = ["A", "B"];
// ```

// ❌ Mixed values:

// ```ts
// let arr: number[] = [1, "two"]; // error
// ```

// ---

// ## 1️⃣1️⃣ Tuple (Fixed Length & Order)

// ```ts
// let user: [number, string] = [1, "Akshay"];
// ```

// ❌ Order matters

// ---

// ## 1️⃣2️⃣ Object

// ```ts
// let user: {
//   name: string;
//   age: number;
//   isAdmin: boolean;
// } = {
//   name: "Akshay",
//   age: 22,
//   isAdmin: false
// };
// ```

// ---

// # 🔰 4. Advanced & Commonly Used Types

// ---

// ## 1️⃣3️⃣ Union Type

// Multiple possible types

// ```ts
// let id: number | string;
// id = 101;
// id = "A101";
// ```

// Very common in APIs

// ---

// ## 1️⃣4️⃣ Type Alias

// ```ts
// type ID = number | string;

// let userId: ID = "abc123";
// ```

// ---

// ## 1️⃣5️⃣ Interface

// Used to define object shape

// ```ts
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// const user: User = {
//   id: 1,
//   name: "Akshay",
//   email: "a@gmail.com"
// };
// ```

// ---

// ## 1️⃣6️⃣ Enum

// Fixed set of values

// ```ts
// enum Role {
//   ADMIN,
//   USER,
//   DOCTOR
// }

// let role: Role = Role.ADMIN;
// ```

// ---

// ## 1️⃣7️⃣ Literal Types

// Exact value type

// ```ts
// let status: "success" | "error";
// status = "success";
// ```

// Used in APIs & Redux

// ---

// ## 1️⃣8️⃣ Function Type

// ```ts
// function add(a: number, b: number): number {
//   return a + b;
// }
// ```

// ---

// ## 1️⃣9️⃣ Optional Type (`?`)

// ```ts
// interface User {
//   name: string;
//   age?: number;
// }
// ```

// ---

// ## 2️⃣0️⃣ Readonly

// ```ts
// interface User {
//   readonly id: number;
//   name: string;
// }
// ```

// ❌ Cannot change `id`

// ---

// # 🔰 5. Type Inference (TS is Smart)

// ```ts
// let city = "Kanpur";
// // city = 123 ❌ error
// ```

// TS automatically assigns `string`

// ---

// # 🔰 6. Comparison Table (Interview ⭐)

// | Type      | Use              |
// | --------- | ---------------- |
// | number    | Numeric values   |
// | string    | Text             |
// | boolean   | true/false       |
// | any       | Disable checks   |
// | unknown   | Safe any         |
// | void      | No return        |
// | never     | Never returns    |
// | array     | List             |
// | tuple     | Fixed list       |
// | union     | Multiple types   |
// | interface | Object structure |
// | enum      | Fixed options    |

// ---

// # 🔑 Common Beginner Mistakes

// ❌ Using `any` everywhere
// ❌ Forgetting return type
// ❌ Not using union for null
// ❌ Confusing `unknown` & `any`

// ---

// # ✅ One-Line Summary

// **TypeScript data types help you write safe, predictable, and scalable JavaScript code.**

// ---

// ## 🔥 Next Topics (Tell me what you want next):

// 1️⃣ **Type inference vs annotation**
// 2️⃣ **Functions in TS (deep)**
// 3️⃣ **Interface vs Type (interview)**
// 4️⃣ **TypeScript with React**
// 5️⃣ **Practice questions + outputs**

// I’ll teach you step by step 💪
