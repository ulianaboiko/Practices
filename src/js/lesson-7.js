"use strict";

//Масиви. Ітерація Array

// const students = [
//   "Богдан",
//   "Ваня",
//   "Вова",
//   "Артем",
//   "Кирил",
//   "Даня",
//   "Максим",
//   "Даніїл",
//   "Уляна",
// ];
// students.length = 5;
// students[8] = "Софія";
// console.log(students[students.length - 1]);

// for (let i = 0; i < students.length; i++) {
//   //   console.log(`Привіт ${students[i]}`);
//   students[i] = `${i + 1}. ${students[i]}`;
// }
// console.log(students);

// for (let student of students) {
//   if (student === "Артем") {
//     continue;
//   }
//   console.log(`Hello ${student}`);
// }

// const students = [
//   ["Богдан", 15],
//   ["Ваня", 11],
//   ["Вова", 15],
//   ["Артем", 15],
//   ["Кирил", 14],
//   ["Даня", 17],
//   ["Максим", 15],
//   ["Даніїл", 15],
//   ["Уляна", 16],
// ];
// for (let student of students) {
//   for (let innerStudent of student) {
//     console.log(innerStudent);
//   }
// }
// console.log("===========================");

// for (let i = 0; i < students.length; i++) {
//   for (let j = 0; j < students[i]; j++) {
//     console.log(students[i][j]);
//   }
// }

// //1
// const Arr1 = [1, 5, "4", "hello"];
// const Arr2 = [true, 2, {}, ["a"], 222];
// console.log(Arr1[1]);
// console.log(Arr2[1]);
// console.log(Arr1[1] + Arr2[1]);

// //2
// const arrayOfStrings = ["hello", "how", "are", "you", "?"];
// console.log(arrayOfStrings[0]);
// arrayOfStrings[arrayOfStrings.length - 1] = "doing";
// console.log(arrayOfStrings[arrayOfStrings.length - 1]);

// //3
// const programingLanguage = ["js", "c++", "python"];
// for (let i = 0; i < programingLanguage.length; i++) {
//   console.log(programingLanguage[i]);
// }
// for (let element of programingLanguage) {
//   console.log(element);
// }

// //4
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (let number of cart) {
//   total += number;
// }
// console.log(total);
// //or
// for (let i = 0; i < cart.length; i++) {
//   total += cart[i];
// }
// console.log(total);

// //5
// const arr1 = [12, 34, 55, 66, 123, 46, 753, 1221, 2];
// arr1[arr1.length] = 22;
// for (let elem of arr1) {
//   console.log(elem);
// }

// //6
// for (let element of Arr2) {
//   console.log(`Значення ${element} тип ${typeof element}`);
// }

// //7
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let totals = 0;
// for (let number of numbers) {
//   if (number % 2 === 0) {
//     totals += number;
//   }
// }
// console.log(totals);

//8
const logins = ["whyauquamarine", "JoiZu", "mollystutu", "kruisher"];
const targetLogin = "JoiZu";
// let found = false;

// for (let i = 0; i < logins.length; i++) {
//   if (logins[i] === targetLogin) {
//     console.log(`Користувач ${targetLogin} знайдено`);
//     found = true;
//     break;
//   }
// }
// if (!found) {
//   console.log(`Користувач ${targetLogin} не знайдено`);
// }

const message = logins.includes(targetLogin)
  ? `Користувач ${targetLogin} знайдено`
  : `Користувач ${targetLogin} не знайдено`;
console.log(message);
