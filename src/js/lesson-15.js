//15 Методи Reduce and Sort

const numbers = [1, 2, 3, -4, 5];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);
///0+1 - перша ітерація
//1+2
//3+3
//6+(-4)
console.log(total);

let sum = 0;
for (const number of numbers) {
  sum += number;
}

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// let likes = 0;
// for (const tweeet of tweets) {
//   likes += tweeet.likes;
// } імперативний код

const likes = tweets.reduce((totalLikes, tweet) => {
  return totalLikes + tweet.likes;
}, 0);
console.log(likes); //32
//---------------------------------------
const tags = [];
tweets.forEach((tweet) => {
  tags.push(...tweet.tags);
});
console.log(tags);
//-----------
const totalTags = tweets.reduce((allTages, tweet) => {
  allTages.push(...tweet.tags);
  return allTages;
}, []); //[]- перше значення яке потрапить в ініціалізатор
console.log(totalTags);

//---------------------------------------
const countTages = totalTags.reduce((acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }
  acc[tag] += 1;
  return acc;
}, {});
console.log(countTages);

//=======--------------------метод SORT--------------===========================-------------=
//змінює масив

const clients = ["Mango", "Ajax", "Poly", "Apolo", "Chelsey"];
const sortedClients = clients.sort((a, b) => {
  ///a=next b=previous
  return b.localeCompare(a);
});
console.log(clients);
//якщо а є більша за б то в нас буде додатнє число тому в нас з рядками все розташується від а до я. якщо буде -1 т

// const first = "Mango";
// const second = "Ajax";

// console.log(first.localeCompare(second)); //передаємо одному рядку і викликаю інший

const numbers2 = [10, 122, 34, 6, 2, 5, 8, 3, 7, -46, -2, 45];
const sortedNumbers = numbers2.sort((next, prev) => prev - next); //від більшого ло меншого
const sortedNumbers2 = numbers2.sort((next, prev) => next - prev);
console.log(sortedNumbers);

const sortedTweets = tweets.sort((next, prev) => next.likes - prev.likes);
console.log(sortedTweets);

//Практичні завдання
//1
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const totalTimePlayed = players.reduce((allTime, player) => {
  return allTime + player.timePlayed;
}, 0);
console.log(totalTimePlayed);

//2
const sortedPlayersByTimePlayed = players.sort(
  (a, b) => a.timePlayed - b.timePlayed
);
console.log(sortedPlayersByTimePlayed);

//3
const arr = [
  { name: "John", age: 32 },
  { name: "Jane", age: 26 },
  { name: "Mike", age: 42 },
  { name: "Emily", age: 29 },
];
const sortedArrayByName = arr.sort((a, b) => {
  return a.name.localeCompare(b.name);
});
console.log(sortedArrayByName);

// Відсортуйте масив об'єктів за спаданням значення властивості
//  popularity, а при однаковому значенні popularity -
//  за алфавітом значення властивості name.
// const items = [
//   { name: "Item A", popularity: 5 },
//   { name: "Item C", popularity: 2 },
//   { name: "Item D", popularity: 3 },
//   { name: "Item B", popularity: 5 },
// ];
// const sortedItemsByPopularity = items.sort(
//   (a, b) => b.popularity - a.popularity
// );
// console.log(sortedItemsByPopularity);
