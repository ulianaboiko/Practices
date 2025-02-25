"use strict";

//Функціональний вираз
// const sum = function (firstNumber, secondNumber) {
//   const result = firstNumber + secondNumber;
//   console.log(result);
//   return result;
// };

// const result = sum(10, 15);
// console.log(result);
// sum(7, 4);

// const summ = function (firstNumber = 0, secondNumber = 0) {
//   return firstNumber + secondNumber;
// };
// console.log(summ());

// for (let i = 1; i <= 5; i += 1) {
//   console.log(i);
// }

// const count = function (countFrom, countTo, step = 1) {
//   for (let i = countFrom; i < countTo; i += step) {
//     console.log(i);
//   }
//   return;
// };
// count(1, 5);
// count(2, 7, 2);

// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log("jjj");
//     return;
//   }
//   if (amount > balance) {
//     console.log("ooo");
//     return;
//   }
//   console.log("jk");
//   balance = balance - amount;
//   return balance;
// };
// console.log(withdraw(0, 5000));

//Функціональний вираз expression
// const summ = function (firstNumber = 0, secondNumber = 0) {
//   return firstNumber + secondNumber;
// };
// console.log(summ(10, 4));

//Оголошення функції declaration
// function multiply(first, second) {
//   return first * second;
// }
// console.log(multiply(5, 2));

// const numbers = [1, 2, 3, 5, 6];
// numbers.splice(1, 1, "new element", 10, 15);
// console.log(numbers);

// const summ = function () {
//   let total = 0;
//   for (let number of arguments) {
//     total += number;
//   }
//   return total;
// };

// const summ = function (...args) {
//   //   const args = Array.from(arguments);
//   console.log(args);
//   return;
// };

// console.log(summ(1, 2, 5, 4, 4, 4, 788));

//Практичні завдання
//1
const hello1 = function () {
  return "привіт javascript";
};
console.log(hello1());

//2
const hello2 = function (name) {
  return `Привіт ${name}`;
};
console.log(hello2("Василь"));

//3
const mull = function (n, m) {
  const sum = n + m;
  const devide = n - m;
  const multiply = n * m;
  return [sum, devide, multiply];
};
console.log(mull(10, 2));

//4
const myAverageScore = function (marks) {
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }
  const average = sum / marks.length;
  if (average <= 100 && average >= 91) {
    return "Myaveragescore : A";
  }

  if (average <= 90 && average >= 81) {
    return "Myaveragescore : B";
  }

  if (average <= 80 && average >= 71) {
    return "Myaveragescore : C";
  }

  if (average <= 70) {
    return "Myaveragescore : D";
  }

  return "Invalid marks";
};
console.log(myAverageScore([100, 75, 81, 96]));

//5
const findAverage = function (numbers) {
  let summ = 0;
  for (let number of numbers) {
    summ += number;
  }
  return summ / numbers.length;
};
console.log(findAverage([100, 12, 12, 3, 43, 43]));

//
