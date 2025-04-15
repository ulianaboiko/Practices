//ООП

//прототипне наслідування - створюємо нові екземпляри базуючись на існуючих

// const animal = {
//   legs: 4,
//   tail: true,
// };

// const dog = {
//   legs: 4,
//   name: "Poly",
// };

// const dog = Object.create(animal); //через метод унаслідуємо значення з обєкту
// dog.sayHello = function () {
//   console.log("Гав");
// };
// console.log("Dog", dog);

// const huski = Object.create(dog);
// console.log("Huski", huski);
// huski.sayHello();

// console.log(dog.hasOwnProperty("legs")); //перевіряє чи є властивість в певного обєкта справжньою-true чи наслідуваною -false

//Функції конструктор-спрощений варіант класу/неактуальний

// const User = function (name, email) {
//   this.name = name;
//   this.email = email;
// };

// User.prototype.getMail = function () {
//   return this.email;
// };
// User.prototype.status = "base";

// const user_725 = new User("Polly", "polly@gmail.com");
// const user_001 = new User("Mango", "mango@gmail.com");

// user_001.status = "pro";
// console.log(user_001.getMail());

//Класи клас - це шаблон для обєктів

class User {
  #password;
  constructor({ name, password }) {
    //обєкт параметра
    this.name = name;
    this.#password = password;
    this.status = "base";
  }

  //geter is used for work with privat values
  get password() {
    return this.#password;
  }

  set password(newPassword) {
    if (newPassword === "") {
      console.log("Пароль не може бути пустим");
    }
    this.#password = newPassword;
    console.log("Пароль оновлено");
  }

  getStatusInfo() {
    return `В даного користувача підписка рівня ${this.status}`;
  }
  updateStatus(newStatus) {
    this.status = newStatus;
    console.log(
      `Рівень підписки користувача ${this.name} оновлено до ${this.status}`
    );
  }
}

const user_002 = new User({ name: "Diego", password: "12345678_" });
const user_010 = new User({ name: "Marco", password: "87654321_" });
// user_002.age = 22;
// user_010.status = "pro"; //краще окремо ствоорити метод в класі

// user_010.updateStatus("plus");

// console.log(user_010.getStatusInfo());
// //як приховувати інфу- приватні властивості через #
// console.log(user_010.getPassword);

// user_002.updatePassword("222");
// console.log(user_002);

user_002.password = "555";
console.log(user_002.password);

//geter спрацьовує коли ми звертаємося до самого password з приватних властивостей
//seter спрацьовує коли ми змінюємо пароль з приватних властивостей
//task1

// Створіть клас Person, що містить властивості firstName та lastName.
// Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName lastName".
// const person1 = new Person('John', 'Doe');
// console.log(person1.getFullName()); // John Doe

// class Person {
//   constructor(firstName, LastName) {
//     this.firstName = firstName;
//     this.LastName = LastName;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.LastName}`;
//   }
// }
// const person1 = new Person("John", "Doe");
// console.log(person1.getFullName());

// Створіть клас Rectangle, що містить властивості width та height.
//  Додайте метод getArea(), який повертає площу прямокутника.
// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50

// class Rectangle {
//   constructor({ width, height }) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.height * this.width;
//   }
// }
// const rectangle1 = new Rectangle({ width: 10, height: 5 });
// console.log(rectangle1.getArea()); // 50

//Статичні властивості - не передаються екземпляру
class User1 {
  static takenMails = [];

  static Roles = {
    ADMIN: "admin",
    BASE_USER: "user",
    EDITOR: "content-creator",
  };

  static isTakenMail(email) {
    return User1.takenMails.includes(email);
  }

  #email;
  #role;
  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
    if (!User1.isTakenMail(email)) {
      User1.takenMails.push(email);
    }
  }
}
const user_003 = new User1({
  email: "email@gmail.com",
  role: User1.Roles.ADMIN,
});
const user_004 = new User1({
  email: "me@gmail.com",
  role: User1.Roles.EDITOR,
});
console.log(user_003);
console.log(user_004);
console.log(User1.takenMails);
