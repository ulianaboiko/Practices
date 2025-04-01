//Деструктарізація обєктів та масивів

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,

//   location: {
//     country: "Spain",
//     city: "Barcelona",
//     address: "123 Beach Road",
//   },
//   amenities: ["Pool", "Spa", "Free Wi-Fi", "Gym", "Restaurant"],
//   rooms: {
//     single: { count: 20, pricePerNight: 80 },
//     double: { count: 50, pricePerNight: 120 },
//     suite: { count: 30, pricePerNight: 250 },
//   },
//   contact: {
//     phone: "+34 123 456 789",
//     email: "info@resorthotel.com",
//   },
//   available: true,
//   pool: true,
// };

// // const {
// //   name = "hotell",
// //   contact,
// //   location: { country },
// //   pool = "інформація відсутня",
// // } = hotel; // location також диструкторизовуєм  через :{}
// //можна ще додавати нові властивості та безпосередньо/за замовчуввнням їх вказувати
// //але якщо воно все ж існує в обєкті то виводиться те що в обєкті а не те що ми дистректорузували

// console.log(name.toUpperCase());

// const getInfo = (hotel) =>
//   `${hotel.name} має ${hotel.stars} зірок, зв'язатися за телефоном ${hotel.contact.phone}`;

// const getInfoNew = ({ name, stars, contact: { phone } }) => {
//   `${name}  має ${stars} зірок, зв'язатися за телефоном ${phone}`;
// };

// // const {
// //   name: hotelName,
// //   contact,
// //   location: { country },
// //   pool = "інформація відсутня",
// // } = hotel;
// // console.log(hotelName);

// const numbers = [1, 2, 3, 4, 5];
// const [, , myNumber] = numbers; // пропускаємо 1 та 2 числа
// console.log(myNumber);

// const students = [
//   ["Артем", "Черкашин"],
//   ["Богдан", "Сало"],
//   ["Ваня", "Харченко"],
// ];
// for (const [name, surname] of students) {
//   console.log(surname);
// }

// const {
//   name: hotelName,
//   contact,
//   location: { country },
//   ...rest
// } = hotel;

// console.log(rest);

//практичні taks
//1
// const user = {
//   name: "John",
//   age: 30,
//   email: "john@example.com",
// };
// const { name, age, email } = user;
// console.log(name, age, email);

// //2
// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   features: ["power windows", "rear camera", "navigation"],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true,
//   },
// };

// const {
//   make,
//   model,
//   year,
//   features: [window, camera, navigator],
//   safety: { airbags, antilock_brakes, stability_control },
// } = car;
// console.log(model);
// console.log(camera);
// console.log(stability_control);

// //3
// const movie = {
//   title: "The Shawshank Redemption",
//   director: {
//     name: "Frank Darabont",
//     nationality: "American",
//   },
//   actors: ["Tim Robbins", "Morgan Freeman"],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90,
//   },
// };

// const {
//   title,
//   director: { name, nationality },
//   actors: [firstActor, secondActor],
//   release_year,
//   ratings: { imdb, rotten_tomatoes },
// } = movie;

// console.log(title);
// console.log(name);
// console.log(nationality);
// console.log(firstActor);
// console.log(secondActor);
// console.log(release_year);
// console.log(imdb);
// console.log(rotten_tomatoes);

// //4
// const address = {
//   street: "Main St",
//   city: "New York",
//   country: "USA",
// };

// //5
// const data = {
//   users: [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 17 },
//     { name: "Bob", age: 30 },
//   ],
// };

// const getUsername = ({ users }) => {
//   const userName = [];
//   for (const { name } of users) {
//     userName.push(name);
//   }
//   return userName;
// };
// console.log(getUsername(data));

// //6
// const courses = {
//   total: 3,
//   list: [
//     { title: "JavaScript Basics", hours: 10 },
//     { title: "React Advanced", hours: 20 },
//     { title: "Node.js Fundamentals", hours: 15 },
//   ],
// };

// const countHours = ({ list }) => {
//   let totalHours = 0;
//   for (const { hours } of list) {
//     totalHours += hours;
//   }
//   return totalHours;
// };
// console.log(countHours(courses));

// //7
// const userProfile = {
//   name: "John Doe",
//   address: {
//     street: "123 Main St",
//     city: "Los Angeles",
//     country: "USA",
//   },
// };

// const userProfile2 = {
//   name: "John Doe",
//   address: {
//     street: "123 Main St",
//     country: "USA",
//   },
// };

// const getAddress = ({
//   address: { city = "Невідоме місто", country = "Невідома країна" },
// }) => {
//   return { city, country };
// };
// console.log(getAddress(userProfile));
// console.log(getAddress(userProfile2));

// //8
// const person = {
//   name: "Nelli",
//   surname: "Laroy",
//   age: 25,
// };

// const personInfo = ({ name, surname, age }) => {
//   return `My name is ${name} ${surname}, I am ${age}`;
// };

// console.log(personInfo(person));

// //9
// const student = {
//   name: "Bruce",
//   surname: "Lee",
//   grades: [4, 5, 3],
// };

// const calculateAverageGrade = ({ grades }) => {
//   let totalSum = 0;
//   for (const grade of grades) {
//     totalSum += grade;
//   }
//   return totalSum / grades.length;
// };

// console.log(calculateAverageGrade(student));

//additional

// const data = {
//   users: [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 17 },
//     { name: "Bob", age: 30 },
//     { name: "Alice", age: 20 },
//   ],
// };

// const getAdultUsers = ([users]) => {
//   const usersUpper18 = [];
//   for (const { age } of users) {
//     if (age >= 18) {
//       usersUpper18.push(age);
//     }
//   }
// };

// console.log(getAdultUsers(data));

const array2 = [
  "apple",
  "banana",
  "orange",
  "banana",
  "grape",
  "apple",
  "kiwi",
];
const getLetters = (arr) => {
  return array2.map();
};
