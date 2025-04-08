//Імператичний та декларативний підхід написання коду. Чисті та нечисті функції

// const dirtyMulpiply = (array, value) => {
//   for (let i = 0; (i = array.length); i += 1) {
//     array[i] = array[i] * value;
//   }
// };
// const numbers = [1, 2, 3, 4, 5];

// dirtyMulpiply(numbers, 2);

// const cleanMultiply = (array, value) => {
//   const modyfyNumbers = [];
//   for (const number of numbers) {
//     modyfyNumbers.push(number * value);
//   }
//   return modyfyNumbers;
// };
// const numbers2 = [1, 2, 3, 4, 5];
// console.log(cleanMultiply(numbers2, 2));
// console.log(numbers2);

//const num = [1, 2, 3, 4, 56, 23];

// //переберає, нічого не повертає замінює for
// num.forEach((number, index, array) => {
//   console.log(`Значення:${number}, індекс:${index}, масив:${array}`);
// }); //анонімна колбек функція

// for (let i = 0; i < num.length; i++) {
//   console.loog(`Значення:${number[i]}, індекс:${i}`);
// }

// //переберає масив і виконує для кожного елемнта== повертає масив з переробленими елементами
// const modifyNumbers = num.map((number) => number + 5);
// console.log(modifyNumbers);

// const modifyNumbersFunc = (array, value) => {
//   const result = [];
//   for (const number of array) {
//     result.push(number + value);
//   }
//   return result;
// };
// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true },
//   { name: "Mango", isActive: true },
// ];

// const names = users.map(({ name }) => name);
// console.log(names);
// //перебирає масив залишає елементи, які задовільняють умову, не змінює оригін масив
// const filteredUsers = users.filter((user) => user.isActive);
// console.log(filteredUsers);

// const filteredUsersByName = users.filter((user) => user.name[0] === "P");

// const filteredNumbers = num.filter((number) => 2);
// console.log(filteredNumbers);

// // ========================================
// //find = перебирає масив, повертає елемент який задовільняє умову. Зупиняється після знаходження першого елемента який задовівльняє умову
// const findUserByName = users.find(({ name }) => name === "Mango");
// console.log(findUserByName);

// //=========================================
// //every- переберає масив, повертає true, якщо всі елементи задовільняють умову
// const isNumbersMoreZero = num.every((number) => number > 0);
// console.log(isNumbersMoreZero);

// const isAllUsersActive = users.every((user) => user.isActive);
// console.log(isAllUsersActive);

// //some - переберає масив, повертає true, якщо хоча б один елемент задовільняє умову
// const isUserActive = users.some((user) => user.isActive);
// console.log(isAllUsersActive);

// //Практичні завдання
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// //1
// // const playerName = players.map((player) => player.name);
// const playerName = players.map(({ name }) => name);
// console.log(playerName);

// //2

// const updatePlayerPoints = players.map((player) => {
//   return { ...player, points: Math.round(player.points * 1.1) };
// });
// console.log(updatePlayerPoints);

// //3
// const changeTimePlayedById = (players, playerId, additionalTime) => {
//   const result = players.map((player) =>
//     player.id === playerId
//       ? { ...player, timePlayed: (player.timePlayed += additionalTime) }
//       : player
//   );
//   return result;
// };
// console.log(changeTimePlayedById(players, "player-5", 40));

// //4
// const playerOnline = players.filter(({ online }) => online);
// console.log(playerOnline);

// //5
// const playerOffline = players.filter(({ online }) => !online);
// console.log(playerOffline);

// //6
// const hardUsers = players.filter(({ timePlayed }) => timePlayed > 250);
// console.log(hardUsers);

// //7
// const findPlayerById = (players, playerId) => {
//   return players.find(({ id }) => id === playerId);
// };
// console.log(findPlayerById(players, "player-3"));
