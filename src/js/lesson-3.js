"use strict";
//Типи рядок - string

// const string = "   JavaScript !";

// string.length; //довжина рядка - к-ть символів (пробіл це теж символ)
// console.log(string.length);

// console.log(string.toLowerCase()); // привовидь всі символи до нижнього реїстру виводить усі літери маленькими
// console.log(string.toUpperCase()); // привовидь всі символи до верхньго реїстру виводить усі літери великими

// console.log(string.indexOf("script")); // повертає індекс першого збігу від рядка
// console.log(string.toLowerCase().indexOf("script"));

// console.log(string.includes("Java")); // повертає true або false в залежності від того чи містить наш рядок підрядок(перевіряє чи є частинкау рядку)

// console.log(string.startsWith("Java")); //  повертає true або false в залежності чи починається рядок з підрядка
// console.log(string.endsWith(" !")); // чи закінчується рядок з підрядка

// console.log(string.trim().length); // Метод trim обрізає зайві пробіли на початку та в кінці рядка

// const stringNumber = "1";
// console.log(stringNumber.padStart(3, "0")); //цей метод доповнює на початку поточний рядок іншим рядком поки отриманий рядок не досягне заданої (на початку в дужках) довжини
// console.log(stringNumber.padEnd(4, "!"));

// //Конкатинація
// const str1 = "Hello";
// const str2 = "World";

// console.log(str1 + " " + str2);
// console.log(1 + "1");
// alert(str1 + str2);

// const templateStr = `${str1} ${str2}`;
// // alert(templateStr);

// const userName = "Uliana";
// const welcomeMessage = `Привіт, ${userName.toUpperCase()}! Вітаємо на сайті!`;
// console.log(welcomeMessage);

// console.log(`Result ${2 + 2}`);

//Практичні завдання
//1
const myFullName = "Uliana Boiko";
console.log(myFullName.length);

//2
const userName = "uliana";
console.log(userName.toUpperCase());

//3
const nName = "Uliana";
console.log(nName.charAt(0)); //

//4
const mName = "Uliana Boiko";
console.log(mName.indexOf(" "));

//5
const justName = "Uliana";
const replaceLetterInName = justName.replace("U", "@");
console.log(replaceLetterInName);

//6
const strtext = "JavaScript";
console.log(strtext.substring(0, 4));

//2.1
const customerName = "Уляна";
const customerSurname = "Бойко";
const time = "17.00";
const roomNumber = "26";
const message = `Гість ${customerName} ${customerSurname} посиляється в ${time} номер ${roomNumber}`;
console.log(message);

//2.2
const notTrimmedSentense = "      Hello World!    ";
const trimmedSentense = notTrimmedSentense.trim();
console.log(trimmedSentense);

//2.3
const textString = "Ваш баланс поповнено на 100000";
// const textStringWithAddedSymbols = textString.padEnd(1, "0");
// console.log(textStringWithAddedSymbols);
console.log(textString.length);

//2.4
const orderMsg = `Ви замовляєте 15 тістечок.`;
console.log(orderMsg.includes(15));
console.log(orderMsg.indexOf("1"));

//3.1
const blacklistedWord1 = "спам";
const blacklistedWord2 = "розпродаж";

const string1 = "Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!";
const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
const string3 = "Рекламна кампанія #jsIsAwesome";
console.log(
  `Рядок ${string1} включає слово ${blacklistedWord1} - ${string1
    .toLowerCase()
    .includes(blacklistedWord1)}`
);
console.log(
  `Рядок ${string2} включає слово ${blacklistedWord2} - ${string2
    .toLowerCase()
    .includes(blacklistedWord2)}`
);
if (
  string1.toLowerCase().includes(blacklistedWord1) ||
  string1.toLowerCase().includes(blacklistedWord2)
) {
  console.log("Повідомлення містить рекламу або спам");
} else {
  console.log("Повідомлення містить небажаний контент");
}

//3.2
const numberHours = отримане число / 60;
const days = Math.floor(numberHours / 24);
const hours = Math.floor(numberHours % 60);
const modHours = String(hours).padStart(2, 0);
const minutes = отримане число % 60;
const modMinutes = String(minutes).padStart(2, 0);
