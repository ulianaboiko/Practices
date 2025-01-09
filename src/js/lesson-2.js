"use strict";

// ЗАНЯТТЯ 2 Математичні оператори
// console.log(3 ** 2); //піднесення до степеня
// console.log(3 + 2); //Додавання
// console.log(3 - 2); //Віднімання
// console.log(3 * 2); //Множення
// console.log(3 / 2); //Ділення
// console.log(3 % 3); //Ділення з остачею - остача від ділення

// let num = 10;
// console.log((num += 2)); //Збільшення значення
// num = num + 2;
// num += 2;
// console.log(num);

//Оператори порівняння
// console.log(1 > 2); //Більше
// console.log(1 < 2); //Менше
// console.log(1 === 2); //Чи 1 = 2, виведе false
// console.log("2" == 2); // will be true
// console.log(0 === 1); //Сувора рівність
// console.log(0 == 1); //рівність true=1 false=0
// console.log(0 != 1); // Нерівність / 0 не дорівнює 1 є щу !== - сувора нерівність

// console.log(Number.parseInt("5.9px")); виведе просто число
// console.log(Number.parseFloat("5.5px")); виведе дробове

// console.log(isNaN("fggf"));
// console.log(isNaN("15"));
//піднесення до степеня 2 до 5
//Заокруглення
// console.log(Math.floor(1.434)); //відкидає дробове число
// console.log(Math.round(2.6)); // Заокруглення по математичному
// console.log(Math.ceil(3.0008)); // заокруглює завжди до більшого навіть з мінімальним 0ю00002

// console.log(Math.min(222, 56, 66, 888, 2, 66)); //Виносить найменше щнач
// console.log(Math.max(222, 56, 66, 888, 2, 66));
// console.log(Math.random() * (10 - 5) + 5);

// console.log((10.324562344750349).toFixed(2) + 12); // Виведе число з 2 символами після коми але тип string
// console.log((0.1 * 10 + 0.2 * 10) / 10);
// console.log((0.1 + 0.2).toFixed(1));

// console.log(isNaN("djdfj"));

// Практика урок 2
// Завдання 1
// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
// console.log("Змінна а1 дорівнює:", a1);
// console.log("Змінна а2 дорівнює:", a2);
// console.log("Змінна а3 дорівнює:", a3);
// console.log("Змінна а4 дорівнює:", a4);
// console.log("Змінна а5 дорівнює:", a5);

// Завдання 2
// const a6 = 5 % 3;
// const a7 = 3 % 5;
// const a8 = 5 + "3";
// const a9 = "5" - 3;
// const a10 = 75 + "кг";
// alert(a6);
// alert(a7);
// alert(a8);
// alert(a9);
// alert(a10);

// Завдання 3
// const min = 1;
// const max = 10;
// const randomNumber = Math.random() * (max - min) + min;
// console.log(randomNumber);

// Завдання 4
// в мене
// const question1 = prompt("Введіть число 1");
// const question2 = prompt("Введіть число 2");
// console.log(parseInt(question1) + parseInt(question2));
// як на уроці
// const firstNumber = Number.parseInt(prompt("Введіть перше число"));
// const secondNumber = Number.parseInt(prompt("Введіть друге число"));
// const sum = firstNumber + secondNumber;
// alert(sum);

//Завдання 2.1
// const k1 = Math.round(parseInt("5px"));
// const k2 = Math.round(parseInt("12djd334"));
// const k3 = Math.round(parseInt("12.25asdwe12"));
// const k4 = Math.round(parseInt("qwqweeewq"));
// console.log(k1);
// console.log(k2);
// console.log(k3);
// console.log(k4);

// Завдання 3.3
// const height = 10;
// const diametr = 4;
// const volume = Math.PI * height * diametr;
// console.log("Обєм циліндра", volume.toFixed(2), "метрів кубічних");
