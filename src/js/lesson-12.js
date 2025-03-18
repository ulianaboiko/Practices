//Об'єкти

// const hotel = {
//   name: "Resort",
//   stars: 5,
//   capacity: 200,
//   pool: true,
// };
// for (const key in hotel) {
//   if (key === "pool") {
//     console.log("цей об'єкт містить інформацію про басейн");
//   }
//   console.log(hotel[key]); //виведе значення усіх ключів об'єкту
//   console.log(key); //виведе усі назви ключів
// }
// console.log(hotel["name"]);

// const keys = Object.keys(hotel); //повертає масив ключів обєкта який ми передаєм/ є методом класу
// console.log(keys);

// for (const key of keys) {
//   console.log(hotel[key]); //виведе значення ключів
// }

// const hotelValues = Object.values(hotel);
// console.log(hotelValues);

// const hotelEntries = Object.entries(hotel); // повертає масив ключів та значень масив в масиві
// console.log(hotelEntries);

// const numbers = [1, 5, 6, 60, 3, 15];
// console.log(...numbers); // оператор spread - ... розпорошує або розпаковує масив

// const maxNumber = Math.max(...numbers);
// console.log(maxNumber);
// const minNumber = Math.min(...numbers);
// console.log(minNumber);

// //Примітивні типи даниих
// const a = 10;
// const b = a;
// b += 1;
// console.log(b); //11
// console.log(a); //10

// //Cкладні типи данних
// const numbers = [1, 5, 6];
// const numbers2 = [...numbers]; //це як копія старого масиву

// numbers2.push(4);
// console.log(numbers2);
// console.log(numbers);

// const hotel = {
//   name: "Resort",
//   stars: 5,
//   capacity: 200,
// };

// const hotel2 = { ...hotel, pool: true, name: "nnn" };
// hotel.name = "New name";
// console.log(hotel);
// console.log(hotel2);

// const numbers = [1, 2, 3];
// const numbers2 = [...numbers.slice(0, 1), 100, ...numbers.slice(1)];
// console.log(numbers2);

// const num1 = [1, 2, 3];
// const num2 = [5, 7, 9];
// // const nums = num1.concat(num2);
// const nums = [...num1, ...num2]; //з'єднуємо масиви
// console.log(nums);

// const hotel = {
//   name: "Resort",
//   stars: 5,
//   capacity: 200,
//   pool: true,
// };

// console.log(hotel.hasOwnProperty("pool")); //перевіряє чи є така властивість

//Практичні завдання
//1
const person = {
  name: "Alice",
  age: 30,
  city: "Kyiv",
  country: "Ukraine",
  job: "Developer",
  experience: 5,
  skills: ["JavaScript", "React", "Node.js"],
  isEmployed: true,
  salary: 3000,
  languages: { english: "B2", ukrainian: "native" },
  hobby: "Photography",
};
const countProperties = (obj) => {
  return Object.values(obj).length;
};
console.log(countProperties(person));
// const toCalculatearray = () => {
//   const personValues = Object.values(person);
//   const arrayLength = personValues.length;
//   return arrayLength;
// };
// console.log(toCalculatearray());

//2
const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];
const findFriendByName = (friends, friendName) => {
  for (const friend of friends) {
    if (friend.name === friendName) {
      return friend;
    }
  }
  return null;
};
console.log(findFriendByName(friends, "Poly"));
console.log(findFriendByName(friends, "Chelsy"));

//3
const getAllNames = (friends) => {
  const friendsNames = [];
  for (const friend of friends) {
    friendsNames.push(friend.name);
  }
  return friendsNames;
};
console.log(getAllNames(friends));

//4
const getOnlineFriends = (friends) => {
  const onlineFriend = [];
  for (const friend of friends) {
    if (friend.online) {
      onlineFriend.push(friend.name);
    }
  }
  return onlineFriend;
};
console.log(getOnlineFriends(friends));

//5
const getFriendsByStatus = function (friends) {
  const friendByStat = {
    onlineFriends: [],
    offlineFriends: [],
  };
  for (const friend of friends) {
    if (friend.online) {
      friendByStat.onlineFriends.push(friend.name);
    } else {
      friendByStat.offlineFriends.push(friend.name);
    }
  }
  return friendByStat;
};

console.log(getFriendsByStatus(friends));

//2.5
const movies = [
  { title: "S", director: "G", year: "2008", genre: "romance" },
  { title: "S", director: "G", year: "2008", genre: "horror" },
  { title: "S", director: "G", year: "2008", genre: "romance" },
  { title: "S", director: "G", year: "2008", genre: "epic" },
];
