//Обєкти

// const cart = {
//     items: [],
//     getItems() {}, //повертає список товарів
//     add(product) {}, // додає товар
//     remove(productName) {},// видаляє товар
//     clear() {}, //очищає корзину
//     countTotalPrice() {}, //рахує загальну вартість
//   };

// const students = [
//   "Ваня",
//   "Давид",
//   "Даня",
//   "Максим",
//   "Данііл",
//   "Богдан",
//   "Кирил",
//   "Вова",
//   "Уляна",
//   "Артем",
// ];
// students.length;
// students[1];

// const key = "stars";
// //створення обєкту
// const hotel = {
//   name: "Resort", //key завжди рядок тут ключ це name а резорт то значення і може бути рвзним не тільки рядком
//   stars: 5,
//   pool: true,
//   capacity: 500,
// };

// console.log(hotel.capacity);
// console.log(hotel[key]);
// console.log(hotel.poo);

// hotel.pool = true;
// console.log;
// //зміна значення певної властивості
// hotel.capacity = 200;
// //створення нової властивості
// hotel.pool = true;
// delete hotel.stars;
// console.log(hotel);

//коросткі властивості

// const catName = "catName";
// const catColor = "white";

// const cat = {
//   name: "catName",
//   catColor: "jjj",
//   catage: 5,
// };
// console.log(cat);

// //Обчислювальні властивості
// const newCat = {
//   [`First-${catName}`]: "catName",
//   catColor,
//   catage: 5,
// };
// Math.random();

// const hotel = {
//   name: "Resort",
//   stars: 5,
//   pool: true,
//   capacity: 500,
//   //метод обєкту
//   showHotelName() {
//     console.log(`welcome to the hotel ${this.name}`);
//   },
//   changeRating(newRating) {
//     this.stars = newRating;
//   },
// };

// hotel.showHotelName();
// hotel.changeRating(4);
// console.log(hotel);

// const person = {
//   name: "Тимур",
//   age: 15,
//   sayName() {
//     console.log(this.name);
//   },
//   run() {
//     //код для бігу
//   },
// };
// person.run();

//практичні завдання
// //1
// const person = {
//   age: 15,
//   name: "Vika",
//   gender: "female",
//   showInformation() {
//     console.log(
//       `Людина з ім'ям ${this.name}, віком ${this.age}, стать-${this.gender}`
//     );
//   },
// };
// person.showInformation();

// //2
// const car = {
//   brand: "Mercedes",
//   model: "Mercedes-Benz",
//   year: 2018,
//   color: "silver",
//   showData() {
//     console.log(
//       `Це автомобіль бренду ${this.brand} моделі ${this.model}, ${this.year} року і ${this.color} кольору`
//     );
//   },
// };
// car.showData();

// //3
// const movie = {
//   title: "Avatar",
//   director: "James Cameron",
//   year: 2009,
//   genre: "fantasy",
//   showCinemaInfo() {
//     console.log(
//       `Назва фільму-${this.title} режисер-${this.director} рік-${this.year} жанр${this.genre}`
//     );
//   },
// };
// movie.showCinemaInfo();

// //4
// const laptop = {
//   brand: "Apple",
//   model: "MacBook Pro",
//   processor: "M2",
//   ram: "8gb",
//   getLaptopInfo() {
//     return `laptop ${this.brand} ${this.model} with processor ${this.processor} and ${this.ram}`;
//   },
// };

// console.log(laptop.getLaptopInfo());
// // alert(laptop.getLaptopInfo());

// //5
// const house = {
//   adress: "Shevchenka 09-10",
//   floors: 10,
//   color: "beige",
//   yearBuilt: 2006,
//   getAdress() {
//     return this.adress;
//   },
// };
// house.color = "gray";
// console.log(house.getAdress());
// console.log(house);

// //6 did it(emo)
// const book = {
//   title: "shatter me",
//   author: "T. Mafi",
//   year: 2011,
//   genre: "antuutopia",
//   updateProps(key, newValue) {
//     this[key] = newValue;
//   },
// };
// book.updateProps("year", 2023);
// console.log(book);

// //7
// const restaurant = {
//   name: "Rosemary",
//   cuisine: "tratitional",
//   address: "Street 35",
//   rating: 5,
//   changeAddress(newAddress) {
//     this.address = newAddress;
//   },
//   changeRating(newRating) {
//     if ((newRating) => 0 && newRating <= 5) {
//       this.rating = newRating;
//     }
//   },
// };
// restaurant.changeAddress("Street 22");
// restaurant.changeRating(0);
// console.log(restaurant);

// //8
// const students = [
//   {
//     name: "Uliana",
//     age: 16,
//     gender: "female",
//     grade: 1092,
//   },
//   {
//     name: "Artem",
//     age: 16,
//     gender: "male",
//     grade: 1039,
//   },
//   {
//     name: "Ivan",
//     age: 11,
//     gender: "male",
//     grade: 752,
//   },
// ];

// const getAverageGrade = (students) => {
//   let sum = 0;
//   for (const student of students) {
//     sum += student.grade;
//   }
//   return sum / students.length;
// };
// console.log(getAverageGrade(students));
