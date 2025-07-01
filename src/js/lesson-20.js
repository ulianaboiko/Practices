//події з клавіатурою

// const handleKeyPress = (event) => {
//   if (event.code === "Escape") {
//     console.log("Натиснена правильна клавіша");
//   } else {
//     console.log("Подумай ще");
//   }
//   if (event.code === "KeyW") {
//     console.log("вперед");
//   }
// };
// document.addEventListener("keydown", handleKeyPress);

// const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
// const randomIndex = Math.floor(Math.random() * (letters.length - 1));
// const currentLetter = letters[randomIndex];

// alert("Спробуй відгадати клавішу комп'ютера");
// const handlerRandomkey = (event) => {
//   if (event.key === currentLetter) {
//     alert("Клавіша - правильна");
//   } else {
//     alert("Клавіша - неправильна");
//   }
// };

// document.addEventListener("keydown", handlerRandomkey);

// //як відслідкувати службові клавіші (cntr+V припустим)

// const handleKeyPressed = (event) => {
//   console.log(event);
//   if (event.altKey && event.code === "KeyR") {
//     console.log("натиснена правильна комбінація клавіш");
//   }
// };
// document.addEventListener("keydown", handleKeyPressed);

// //події з мишкою

// const elem = document.querySelector(".element");

// const handleEventOut = (event) => {
//   if (event.button === 0) {
//     console.log(event);
//   }
//   elem.style.backgroundColor = "purple";
// };
// //button - 0 - left, 1 - button коліща, 2- right

// const handleEventOver = (event) => {
//   elem.style.backgroundColor = "gold";
// };

// elem.addEventListener("mouseout", handleEventOut);
// elem.addEventListener("mouseover", handleEventOver);

// // -------------

// const handleEventMove = (event) => {
//   console.log(event);
// };
// elem.addEventListener("mousemove", handleEventMove);

// // -------------------
// const handleEventdbclick = (event) => {
//   console.log(event);
// };
// elem.addEventListener("dbclick", handleEventdbclick);

//Практичні
// 1
// const clearBtn = document.querySelector(".js-clear");
// const output = document.querySelector(".js-output");

// const handleClear = () => (output.textContent = "");

// const handleOutput = (e) => {
//   if (e.key === "Backspace") return;
//   output.textContent += e.key;
// };

// document.addEventListener("keydown", handleOutput);
// clearBtn.addEventListener("click", handleClear);

// // 2
// const input = document.querySelector("#input");
// const message = document.querySelector("#message");

// const handleInputMessage = () => {
//   message.textContent = input.value;
// };

// document.addEventListener("keydown", handleInputMessage);

// //4
// const element = document.querySelector("#box");

// const handleColorChange = (event) => {
//   console.log(event);
//   if (event.code === "KeyY") {
//     element.style.backgroundColor = "yellow";
//   }
//   if (event.code === "KeyG") {
//     element.style.backgroundColor = "green";
//   }
// };

// document.addEventListener("keydown", handleColorChange);
// ----------------------------------------------------

// const field = document.querySelector("#field");
// const ball = document.querySelector("#ball");

// const handleBall = (e) => {
//   const ballSize = 50;

//   let x = e.clientX - rect.left - ballSize / 2;
//   let y = e.clientY - rect.top - ballSize / 2;

//   // Обмеження по краях контейнера
//   const maxX = rect.width - ballSize;
//   const maxY = rect.height - ballSize;
//   x = Math.max(0, Math.min(x, maxX));
//   y = Math.max(0, Math.min(y, maxY));
//   ball.style.left = `${x}px`;
//   ball.style.top = `${y}px`;
//   ball.style.transform = "translate(0, 0)";
// };

// field.addEventListener("click", handleBall);

const field = document.getElementById("field");
const ball = document.getElementById("ball");

field.addEventListener("click", function (event) {
  const fieldRect = field.getBoundingClientRect();

  const ballSize = 50;
  let newLeft = event.clientX - fieldRect.left - ballSize / 2;
  let newTop = event.clientY - fieldRect.top - ballSize / 2;

  // newLeft = Math.max(0, Math.min(newLeft, field.clientWidth - ballSize));
  // newTop = Math.max(0, Math.min(newTop, field.clientHeight - ballSize));

  ball.style.left = `${newLeft}px`;
  ball.style.top = `${newTop}px`;

  //   event.preventDefault();
  //   let x = event.clientX;
  //   let y = event.clientY;
  //   console.log("clientX:", x);
  //   console.log("clientY:", y);

  //   ball.style.left = `${x}px`;
  //   ball.style.top = `${y}px`;
});
