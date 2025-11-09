// const start = document.querySelector(".start");
// const welcomeTitle = document.querySelector(".welcome-js");

// setTimeout(() => {
//   welcomeTitle.classList.add("is-hidden");
// }, 5000);

// const stop = document.querySelector(".stop");
// const sayHello = () => {
//   console.log("HELLO");
// };

// start.addEventListener("click", () => {
//   setTimeout(sayHello, 2500);
// });

// const intervalId = setInterval(sayHello, 2000);
// console.log(intervalId);

// stop.addEventListener("click", () => {
//   clearInterval(intervalId);
// });

const setMyInterval = (callback, delay) => {
  const intervalId = Math.random() * 100;
  //Встановлення функції callback на час delay
  return intervalId;
};

// =====================
// Practice

// 2
const counterSpan = document.querySelector(".counter");
let counter = 0;

const addCounter = () => {
  counter++;
  counterSpan.textContent = counter;
};
setInterval(addCounter, 1000);

// 3
const colorBox = document.querySelector(".color-box");

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
  // const getRandomColorChannel = () => Math.round(Math.random * 255);
  // return `rgb(${getRandomColorChannel()}, ${getRandomColorChannel()},${getRandomColorChannel()})`;
};
const randomColor = () => {
  colorBox.style.backgroundColor = getRandomColor();
};

setInterval(randomColor, 1000);

//   const randomColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
//   };

// 4
const text = document.querySelector(".text");
const words = [
  "fruits",
  "are",
  "kinda",
  "you know",
  "to eat",
  "similar",
  "to",
  "vegetables",
];
let index = 0;

const changeText = () => {
  if (index < words.length) {
    text.textContent = words[index];
    index++;
  } else {
    index = 0;
    text.textContent = words[index];
  }
};
setInterval(changeText, 2000);

//additional
const slide = document.querySelector("slide");
let currentIndex = 0;

const showSlide = () => {
  currentIndex++;
  slide[currentIndex].classList.add("active");
  setTimeout(showSlide, 3000);
};
