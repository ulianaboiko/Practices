"use strict";

//Логічні оператори SWITCH
// let cost;
// const sub = "pro";

// if (sub === "vip") {
//   cost = 10;
// } else if (sub === "base") {
//   cost = 3;
// } else if (sub === "pro") {
//   cost = 5;
// } else {
//   alert("Такої підписки не існує!");
// }
// let isSuccess = false;
// if (sub === "vip" || sub === "base" || sub === "pro") {
//   isSuccess = true;
// }

// switch (sub) {
//   case "vip":
//     cost = 10;
//     console.log("case 1");
//     break;
//   case "base":
//     cost = 3;
//     console.log("case 2");
//     break;
//   case "pro":
//     cost = 5;
//     console.log("case 3");
//     break;
//   default:
//     alert("Такого не існує");
// }
// // Області видимості
// if (true) {
//   console.log(cast);
//   if (true) {
//     const cast = 5;
//     console.log(cast);
//   }
// }
// console.log(cast);

// if (true) {
//   const subs = 0;
//   console.log(cast);
//   if (true) {
//     const cast = 5;
//     console.log(cast);
//   }
// }

// console.log(eval("2+2"));

//Практичні завдання
//1
// let textContent;
// const browser = "Safari";
// switch (browser) {
//   case "Edge":
//     textContent = "You've got the Edge!";
//     break;
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     textContent = "Ми підтримуємо і ці браузери";
//     break;
//   default:
//     textContent = "Маємо надію, що ця сторінка виглядає добре!";
// }
// console.log(textContent);

// //2
// const a = Number(prompt("Введіть ціле число від 0 до 3 :"));
// let result;
// switch (a) {
//   case 0:
//     result = 0;
//     break;
//   case 1:
//     result = 1;
//     break;
//   case 2:
//   case 3:
//     result = "2 , 3";
//     break;
//   default:
//     result = "Ви ввели невірне значення цілого числа";
// }
// console.log(result);

// //2.1
// const askNumb = Number(prompt("Введіть ціле число"));
// if (askNumb >= 55 && askNumb <= 99) {
//   alert("Число потрапляє в діапазон");
// } else {
//   alert("Число не потрапляє в діапазон");
// }

// //2.2
// const age = 55;
// if (age >= 0 && age <= 16) {
//   console.log("Ви відноситесь до вікої групи  діти");
// } else if (age >= 17 && age <= 60) {
//   console.log("Ви відноситесь до вікої групи дорослі");
// } else if (age >= 61 && age <= 100) {
//   console.log("Ви відноситесь до вікої групи пенсіонери");
// }

// //2.3
// const userName = prompt("Введіть ваше ім'я");
// const userSurename = prompt("Введіть ваше прізвище");
// if (userName.length > 4 && userSurename.length > 5) {
//   const fullNameLength = userName.length + userSurename.length;
//   alert(fullNameLength);
// } else alert("УПС");

// //2.4
// const num = Math.floor(Math.random() * 5 + 1);
// if (num === 1) {
//   console.log("1");
// } else if (num === 2) {
//   console.log("2");
// } else if (num === 3) {
//   console.log("3");
// } else if (num === 4) {
//   console.log("4");
// } else if (num === 5) {
//   console.log("5");
// }
// switch (num) {
//   case 1:
//     console.log("1");
//     break;
//   case 2:
//     console.log("2");
//     break;
//   case 3:
//     console.log("3");
//     break;
//   case 4:
//     console.log("4");
//     break;
//   case 5:
//     console.log("5");
//     break;
// }

// //2.5
// const lagn = "ua";
// let month;
// switch (lagn) {
//   case "ua":
//     console.log("Січень");
//     break;
//   case "en":
//     console.log("January");
//     break;
//   case "it":
//     console.log("Gennaio");
//     break;
//   case "fr":
//     console.log("Jenvier");
//     break;
//   default:
// }
