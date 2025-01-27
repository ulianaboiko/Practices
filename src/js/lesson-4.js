"use strict";

// console.log(2 && 0 && 5); //&& - and, виводить false, приводить зліва на право перше значення false
// console.log(0 || 4); // ||- або приводить перше true
// console.log(!5); //! - не і !!- нен не треба
// console.log(!10);

// let number = Я;
// if (number) {
//   console.log("перший блок коду");
// } else if (numder === 0) {
//   console.log("Други йкод коду");
// } else if (number > 19) {
// console.log('Число більше 10')
// } else {pjcm4w4rey}

// const userAge = prompt("Вкажіть свій вік"); //  якщо скасує буде null якщо ок то нічого і якщо веде то буде значення

// // якщо ми нічого не пишемо або скасовуємо то то є нал або пусто що є false тому після if нічого не виводиться
// if (Number(userAge)) {
//   console.log(`Ваш вік ${userAge}`);
// } else if (userAge) {
//   alert("Ви ввели некоректні дані");
// } else {
//   alert("Ви не ввели дані!");
// }

// const num1 = 10;
// const num2 = 15;
// const bigestNumber = num1 > num2 ? num1 : num2; // перед ? умова і якщо правдива то перша повернеться а якщо інша правдива повернеться те що після :

// let secondBigestNumber;
// if (num1 > num2) {
//   secondBigestNumber = num1;
// } else {
//   secondBigestNumber = num2;
// }

// Практичні завдання
//1
// if ("0") {
//   console.log("Привіт");
// }

// //2
// const userAnswer = prompt("Яка “офіційна” назва JavaScript?");
// if (userAnswer.toLowerCase() === "ecmascript") {
//   alert("Правильно");
// } else {
//   alert("Ви не знаєте? ECMAScript!");
// }

// //3
// const askNumber = prompt("Введіть число");
// if (Number(askNumber) > 0) {
//   console.log("1");
// } else if (Number(askNumber) < 0) {
//   console.log("-1");
// } else {
//   console.log("0");
// }

// //4
// const a = 4;
// const b = 5;
// const rusult = a + b < 4 ? "Нижче" : "Вище";
// console.log(rusult);

// //2.1
// const x1 = 10;
// const x2 = 30;
// const number = 11;

// if (number < x1) {
//   console.log("до x1");
// } else if (number < x1 || number > x2) {
//   console.log("після x1");
// } else if (number > x1 && number < x2) {
//   console.log("від x1 до x2");
// } else if (number > x1) {
//   console.log("до x1 or після x2");
// }

// //2.2
// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// if (isFriend && isOnline && !isDnd) {
//   console.log("Відкрити чат");
// } else {
//   console.log("Закрити чат");
// }

// //2.3
// const sub = "free";
// if (sub === "pro" || sub === "vip") {
//   console.log("Доступ дозволено");
// } else {
//   console.log("Доступ заборонено");
// }

//2.4
// let balance = Number(prompt("Який у вас баланс?"));
// const payment = Number(prompt("Сума покупки"));
// alert(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість
// доступних коштів на рахунку
// `);
// if (payment <= balance) {
//   balance = balance - payment;
//   alert(`На рахунку залишилося ${balance} кредитів`);
// } else {
//   alert("На рахунку недостатньо коштів для проведення операції!");
// }
// alert("Операція завершена");

//3
const totalSpent = Number(prompt("Введіть загальну суму витрачених коштів"));
const payment = Number(prompt("Введіть суму поточного платежу"));
let discount;
if (totalSpent >= 100 && totalSpent < 1000) {
  discount = 2;
  alert("Бронзовий партнер, знижка 2%");
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  discount = 5;
  alert("Срібний партнер, знижка 5%");
} else if (totalSpent > 5000) {
  discount = 10;
  alert("Золотий партнер, знижка 10%");
} else {
  alert("У вас ще немає партнерської знижки");
}
alert(`Оформляемо замовлення на суму ${payment} зі знижкою ${discount}%`);
