// Події

// const btn = document.querySelector("[data-button]");
// const removeBtn = document.querySelector("[data-remove-handler]");

// const handleClick = () => {
//   alert("ви клікнули на кнопку");
// };

// btn.addEventListener("click", handleClick);
// // може бути колбек з назвою handleClick || clickHandler

// const handleClickRemove = () => {
//   btn.removeEventListener("click", handleClick);
//   btn.remove();
// };

// removeBtn.addEventListener("click", handleClickRemove);

//Form--------------------------------------------------

// const searckForm = document.querySelector("[data-searchform]");

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("Відбувається пошук");
//   setTimeout(() => {
//     console.log("нічого не знайдено");
//   }, 3000);
// };

// searckForm.addEventListener("submit", handleSubmit);

// //що таке even
// // target - ціль
// const Submit = (event) => {
//   event.preventDefault();
//   console.log(event.srcElement[0].value); // value маємо доступ до того що ввели в input
//   console.log(event.target);

// };

// document.body.addEventListener("click", Submit);

// const menu = document.querySelector(".context-menu");

// document.body.addEventListener("contextmenu", (event) => {
//   event.preventDefault();
//   //   menu.style.display = "block";
//   //   menu.style.left = `${event.clientX}px`;
//   //   menu.style.top = `${event.clientY}px`;
//   const currentForm = event.target;

//   console.dir(currentForm);
//   const { email } = currentForm.elements;
//   console.log("пошта", email.value);
// }); //при кліку на праву кнопку миші створили контекстне меню

// //
// const formInput = document.querySelector("[data-text-input]");
// const formCheck = document.querySelector("[data-check]");
// const output = document.querySelector("[data-output]");

// formInput.addEventListener("input", (event) => {
//   console.log(event.target.value); // target це поле тексту input, а сам текст value
// });

// formInput.addEventListener("focus", (event) => {
//   event.target.style.outline = "3px solid green";
// });
// formInput.addEventListener("blur", (event) => {
//   event.target.style.outline = "3px solid red";
// });

///Практичні
// const btn = document.querySelector("[data-btn]");

// const handleColorChange = (event) => {
//   const randomColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
//   };
//   event.target.style.backgroundColor = randomColor();
// };

// btn.addEventListener("click", handleColorChange);
