"use strict";

// Цикли

// let counter = 0;
// while (counter < 10) {
//   counter += 1;
//   console.log(counter);
// }

// const PASSWORD = "11122122"; //якщо назва зміееої капсом то вона важлива
// let userPassword;
// ("11122122");
// while (userPassword !== PASSWORD) {
//   //вивдтть
//   userPassword = prompt("Введіть пароль:");
// }

// do {
//   userPassword = prompt("Введіть пароль:");
// } while (userPassword !== PASSWORD);

// while (userPassword !== PASSWORD) {
//   userPassword = propmt("hhhh");
// }

// Цикл for
// for (let i = 0;  i < 10; i++){
// console.log(i)
// }

// const text = "JavaWScript";

// for (let i = 0; i < text.length; i++) {
//   if (i === 4) {
//     continue;
//   }
//   console.log(text[i]);
// }

//Практичні завдання
//1
// let number = 1;
// while (number <= 5) {
//   console.log(number);
//   number = number + 1;
// }

// do {
//   console.log(number);
//   number = number + 1;
// } while (number <= 5);

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

// //3
// for (let number = 0; number < 5; number++) {
//   console.log(`Число ${number}`);
// }
// //на while
// let num = 0;
// while (num < 5) {
//   console.log(`Число ${num}`);
//   num += 1;
// }

//4
// for (let i = 1; i < 1000; i += 2) {
//   console.log(i);
// }
// for (let a = 1; a < 1000; a++) {
//   if (a % 2 === 0) {
//     continue;
//   } else {
//     console.log(a);
//   }
//   console.log(i);
// }
// for (let b = 0; i < 1000; b++) {
//   if (b % 2 !== o) {
//     console.log(b);
//   }
// }

// //2.1
// let num = 0;
// do {
//   num = Number(prompt("Введіть число більше 100: "));
// } while (num < 100);

//2.2
// const employees = 70;
// let totalSalary = 0;
// for (let i = 1; i <= employees; i++) {
//   const salary = Math.round(Math.random() * (5000 - 500) + 500);
//   totalSalary += salary;
// }
// console.log(totalSalary);

//2.3
// const min = 5;
// const max = 10;
// let sumOfDoubleNumbers = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     sumOfDoubleNumbers += i;
//   }
// }
// console.log(sumOfDoubleNumbers);

// //2.4
// let userResponse;
// do {
//   userResponse = prompt("Введіть число більше 100");
//   if (userResponse === null) {
//     alert("Скасовано");
//     break;
//   }
//   userResponse = Number(userResponse);
// } while (userResponse <= 100 || isNaN(userResponse));

// //2.5
// const min = 0;
// const max = 5;
// let sumOfOddNumber = 0;
// for (let i = min; i <= max; i++) {
//   if (i % 2 !== 0) {
//     sumOfOddNumber += i;
//   }
// }
// console.log(sumOfOddNumber);

//додаткове
