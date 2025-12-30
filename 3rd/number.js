var num = "akshay";
var age = 22;
var price = "99";
var temperature = -5;
var data = parseInt(price);
var result = age + data;
console.log("result", result);
var n = 34;
n = "name";
console.log(n);
console.log(typeof n);
// ### ✅ What is **Inference**? (Simple Explanation)
// **Inference** means **drawing a conclusion using available information**.
// 👉 In simple words:
// **When something figures out or understands on its own, without being told explicitly.**
// ---
// ## 🔹 In Daily Life (Easy Example)
// If you see:
// * Sky is dark
// * Clouds are heavy
// 👉 You **infer** that it may rain 🌧️
// You were not told directly, but you **concluded** using clues.
// ---
// ## 🔹 In Programming (General Meaning)
// Inference =
// 👉 **System automatically understands something based on context**
// ---
// ## 🔹 In TypeScript (Very Important)
// ### **Type Inference**
// TypeScript **automatically decides the data type** of a variable based on its value.
// ---
// ### Example 👇
// ```ts
// let age = 22;
// ```
// TypeScript infers:
// ```ts
// let age: number;
// ```
// You did NOT write `number`, but TS understood it.
// ---
// ### Another Example
// ```ts
// let name = "Akshay";
// ```
// TS infers:
// ```ts
// string
// ```
// ---
// ## 🔹 Without Inference (Manual)
// ```ts
// let age: number = 22;
// ```
// ---
// ## 🔹 With Inference (Automatic)
// ```ts
// let age = 22;
// ```
// Same result ✅
// ---
// ## 🔹 Why Inference is Important?
// ✔ Less code
// ✔ Cleaner code
// ✔ Still type-safe
// ✔ Faster development
// ---
// ## 🔹 One-Line Definition (Exam / Interview)
// > **Inference is the ability to automatically determine something based on given information.**
// ---
// ## 🧠 One-Line Summary
// **Inference means understanding without being explicitly told.**
// Bhai 👍
// Ab **TypeScript ka ek bahut important concept – Type Inference** ko **simple + clear** tarike se samajhte hain.
// ---
// # 📘 Type Inference in TypeScript
// ---
// ## 🔹 Type Inference kya hota hai?
// 👉 **TypeScript automatically variable ka type guess kar leta hai**
// 👉 Tumhe har jagah `: type` likhne ki zarurat nahi hoti
// 📌 TS tumhare **assigned value** se type samajh leta hai
// ---
// ## 🔹 Simple Example
// ```ts
// let age = 22;
// ```
// 👆 TypeScript internally isko samajhta hai:
// ```ts
// let age: number = 22;
// ```
// ❌ Tum agar likho:
// ```ts
// age = "twenty two";
// ```
// ➡️ Error aayega
// ---
// ## 🔹 String Example
// ```ts
// let name = "Akshay";
// ```
// TypeScript infer karta hai:
// ```ts
// let name: string;
// ```
// ---
// ## 🔹 Boolean Example
// ```ts
// let isStudent = true;
// ```
// Infered type:
// ```ts
// boolean
// ```
// ---
// # 🔰 Type Inference kaha-kaha hota hai?
// ---
// ## 1️⃣ Variables
// ```ts
// let price = 99.99;   // number
// let city = "Kanpur"; // string
// ```
// ---
// ## 2️⃣ Arrays
// ```ts
// let nums = [1, 2, 3]; 
// // inferred as number[]
// ```
// ❌ Galat:
// ```ts
// nums.push("4"); // error
// ```
// ---
// ## 3️⃣ Objects
// ```ts
// let user = {
//   name: "Akshay",
//   age: 22
// };
// ```
// Inferred type:
// ```ts
// {
//   name: string;
//   age: number;
// }
// ```
// ---
// ## 4️⃣ Function Return Type
// ```ts
// function add(a: number, b: number) {
//   return a + b;
// }
// ```
// 📌 Return type automatically `number` infer ho jaata hai
// ---
// ## 5️⃣ Default Parameters
// ```ts
// function greet(name = "Guest") {
//   return name;
// }
// ```
// 📌 `name` infer ho jaata hai as `string`
// ---
// # 🔴 Jahan Type Inference kaam nahi karta
// ---
// ## ❌ Variable without value
// ```ts
// let data;
// ```
// 📌 Type becomes `any` (dangerous)
// ```ts
// data = 10;
// data = "hello"; // no error
// ```
// ---
// ## ❌ Function parameters
// ```ts
// function print(value) { // ❌ any
//   console.log(value);
// }
// ```
// ✔ Correct:
// ```ts
// function print(value: string) {
//   console.log(value);
// }
// ```
// ---
// # 🔥 Type Inference vs Type Annotation
// | Feature          | Type Inference | Type Annotation |
// | ---------------- | -------------- | --------------- |
// | Who decides type | TypeScript     | Developer       |
// | Code length      | Short          | Longer          |
// | Safety           | High           | Highest         |
// | Usage            | Most cases     | Public APIs     |
// ---
// ## 🔹 Example Comparison
// ### Inference (Recommended)
// ```ts
// let count = 0;
// ```
// ### Annotation (When needed)
// ```ts
// let count: number = 0;
// ```
// ---
// # 🧠 When to Use What?
// ### ✅ Use Type Inference
// * Local variables
// * Simple logic
// * Inside functions
// ### ✅ Use Type Annotation
// * Function parameters
// * API responses
// * Public functions
// * Complex objects
// ---
// # 🔑 Common Beginner Mistakes
// ❌ Overusing `any`
// ❌ Writing type everywhere
// ❌ Leaving variables uninitialized
// ❌ Not typing function params
// ---
// # 🎯 Interview Line ⭐
// > “Type inference allows TypeScript to automatically determine types based on assigned values.”
// ---
// # 🧠 One-Line Summary
// **Type inference makes TypeScript smart by reducing extra type annotations while maintaining type safety.**
// ---
// Agar chaahe to next:
// 1️⃣ Type inference vs any
// 2️⃣ Function typing deep
// 3️⃣ React + TS inference
// 4️⃣ Tricky interview questions
// Bol bhai 🔥
