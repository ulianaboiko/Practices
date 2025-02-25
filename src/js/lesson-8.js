"use strict";

//Методи масиву

//Додаткові
// const firstStr = "JavaScript";
// // for (let i = 0; i < firstStr.length; i++) {
// //   if (firstStr[i] === firstStr.toUpperCase) {
// //     i = i.toLowerCase;
// //   }
// // }
// const firstStrToArr = firstStr.split("");

// console.log(firstStrToArr);

// const message = "Welcome to Bahamas!";
// const arrOfmessage = message.split(" "); //перетворює рядок в масив по роздільнику
// // console.log(arrOfmessage);

// console.log(arrOfmessage.join(" "));//з'єдную елементи масиву

// const query = "Welcome to Bahamas!";
// const params = query.toLowerCase().split(" ").join("+");
// console.log(params);

// const fruits = ["cherry", "strawberry", "apple", "orange"];
// console.log(fruits.includes("cherry")); //повертає true or false

// console.log(fruits.indexOf("apple")); //повертає індекс

// fruits.push("banana"); //додаємо елемент в кінець масиву
// console.log(fruits);

// fruits.pop(); //видаляємо елемент з кінця масиву
// console.log(fruits);

// fruits.unshift("watermellon"); //додаємо на початок масиву елемент
// console.log(fruits);

// fruits.shift(); //видаляємо на початок масиву елемент
// console.log(fruits);

// const newFruits = fruits.slice(1, 3); //робить копію наявного масиву з 1 до 3 тому виведеться 1 і 2 елемент під цим індексом
// console.log(newFruits);

// const deletedIndex = fruits.indexOf("apple");
// fruits.splice(deletedIndex, 0, "berry", "mellon");
// console.log(fruits);

// const fruit1 = ["cherry", "strawberry", "apple", "orange"];
// const fruit2 = ["cherry", "strawberry", "apple", "orange"];
// const allFruits = fruit2.concat(fruit1);
// console.log(allFruits);

//Практика
//Завдання 1
// const numbers = [12, 23, 11, 34, 22];
// numbers.push(11);
// console.log(numbers);

// //2
// const strings = ["hello", "I'm", "Uliana"];
// strings.pop();
// console.log(strings);

// //3
// const numberes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const five = numberes.slice(0, 5);
// console.log(five);

// //4
// const fiveNumbers = [1, 45, 3, 22, 7];
// console.log(fiveNumbers.indexOf(3));

// //5
// const animals = ["tiger", "monkey", "dog", "lion", "pigeon"];
// const alltogether = animals.join(",");
// console.log(alltogether);

// //6
// const title = "Top 10 benefits of React framework";
// // const result = title.toLocaleLowerCase().split(" ").join("-");
// const titleToLower = title.toLowerCase();
// const arrTitle = titleToLower.split(" ");
// const result = arrTitle.join("-");
// console.log(result);

// //7
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// const firstArryL = array1.length;
// const seconndArrL = array2.length;
// const sum = firstArryL + seconndArrL;
// console.log(sum);
// //or
// const summ = array1.concat(array2);
// console.log(summ.length);

// //8
// const message = "Welcome to Ukraine!";
// const messageArr = message.split("");
// console.log(messageArr);
// console.log(messageArr.indexOf("l"));
// const messageArrToStr = messageArr.join("");
// console.log(messageArrToStr);

// //9
// const players = ["monesy", "donk", "simpe"];
// for (let i = 0; i < players.length; i++) {
//   players[i] = `${players[i]} = ${i + 1}`;
// }
// console.log(players);
// // let counter = 1;
// // let newG = [];
// // for (let play of players){
// //     newG.push(`${play} = ${counter}`)
// //     counter +=1;
// // }
// // console.log(newG);

// //10
// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// console.log(styles);
// styles.splice(1, 1, "Класика");
// styles.shift();
// styles.unshift("Реп", "Реггі");
// console.log(styles);
