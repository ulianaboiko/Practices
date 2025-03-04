"use strict";

//стрілкові функції Колбек(функція як аргумент)для створення абстракцій

// const sum = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// const arrowSum = (a, b) => {
//   return a + b;
// };

// console.log(arrowSum(5, 7));

// const squer = (x) => x * x;
// console.log(squer(5));

// const numbers = [1, 2, 3, 4];
// // function getArraylenght(arr) {
// //   return arr.lenght;
// // }
// const getArraylength = (arr) => arr.length;
// console.log(getArraylength(numbers));

// const arrowSumm = (a, b, ...args) => {
//   //оператор rest
//   console.log(args);
//   return a + b;
// };
// sum(1, 2, 3, 4, 7);
// arrowSumm(1, 23, 4, 5, 6, 7, 8);

// const print = function (message) {
//   console.log(message + "!");
// };
// print("Hello");

// const prettyPrint = function (message, callback) {
//   callback(message);
// };
// print("Hello", (message) => {
//   console.log(message + "!");
// });

// const print = function (message, callback) {
//   callback(message);
// };
// const prettyPrint = (message) => {
//   console.log(message + "!");
// };
// print("Hello", prettyPrint);

// const getAveregeScore = (...args) => {
//   let sum = 0;
//   for (const number of args) {
//     sum += number;
//   }
//   console.log(sum);
// };
// getAveregeScore(1, 3, 5);

// const getAveregeScore = (getSum, ...args) => {
//   const sum = getsum(args);
//   return sum / args.length;
// };

// const getSum = (numbers) => {
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// const result = getAveregeScore(getSum, 1, 3, 5);
// console.log(result);

// const students = [
//   "Ваня",
//   "Давид",
//   "Даня",
//   "Максим",
//   "Данііл",
//   "Богдан",
//   "Кирил",
//   "Вова",
//   "Уляна",
//   "Артем",
// ];

// const filterCallback = (element) => element[0] === "Д";
// const shortName = students.filter(filterCallback);
// //* const shortName = students.filter((student) => student.length <= 4);
// console.log(shortName);

// const myFilter = (arr, callback) => {
//   const filteredElements = [];
//   for (const element of arr) {
//     const isPassed = callback(element); //для кожного застосовуємо callback

//     if (isPassed) {
//       filteredElements.push(element);
//     }
//   }
//   return filteredElements;
// };

// const result = myFilter(students, (student) => student[0] === "Б");
// console.log(result);

// const infinity = () => {
//   infinity();
// };

// call stack хто останній зайшов той перший вийшов = контроль виконання функцій по порядку

//Практичні завдання
//1
// const numberToSquare = (numbers, callback) => {
//   const squareNumbers = [];
//   for (const number of numbers) {
//     const squareNumber = callback(number);
//     squareNumbers.push(squareNumber);
//   }

//   return squareNumbers;
// };
// const result = numberToSquare(
//   [1, 3, 5, 633, 45, 25],
//   (number) => number * number
// );
// console.log(result);

// //2
// const arr = [1, 2, 3, 4, 5];

// const sumArray = (arr, callback) => {
//   const sum = callback(arr);
//   return sum;
// };
// const cb = (numbers) => {
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number;
//   }
//   return sum;
// };

// console.log(sumArray(arr, cb));

// //3
// const arr = [1, 2, 3, 4, 5];

// const multiplyArray = (arr, num, callback) => {
//   const result = [];
//   for (const number of arr) {
//     const multiply = callback(number, num);
//     result.push(multiply);
//   }
//   return result;
// };

// const newArray = multiplyArray(arr, 3, (a, b) => a * b);
// console.log(newArray);

// //additional
// const diferentCallbacks = (arr, callback) => {
//   const newArrayByCallback = [];
//   for (const element of arr) {
//     const getAverage = callback(element);
//     newArrayByCallback.push(getAverage);
//   }
//   return newArrayByCallback;
// };
// const getAverage = (arr) =>
//   arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
// console.log(getAverage);
