// const sum = _.add(2, 3);
// console.log(sum);

// const handleMove = () => {
//   console.log("Move");
// };
// const throttleHandleMove = _.throttle(handleMove, 500);

// const debouncedHandleMove = _.debounce(handleMove, 500, {
//   leading: false,
//   trailing: true,
// });
// // leading-на початку
// // trailing-в кінці
// // document.addEventListener("mousemove", throttleHandleMove);
// document.addEventListener("mousemove", debouncedHandleMove);

//1
// const input = document.querySelector(".input");
// const text = document.querySelector(".text");

// const handleInputText = () => {
//   text.textContent = input.value;
// };

// const throttleHandleInputText = _.throttle(handleInputText, 2000);
// input.addEventListener("input", throttleHandleInputText);

//2
// const input2 = document.querySelector(".input");
// const text2 = document.querySelector(".text");

// const handleinputText2 = () => {
//   text2.textContent = input2.value;
// };
// const debouncedHandletext2 = _.debounce(handleinputText2, 2000);
// input2.addEventListener("input", debouncedHandletext2);

//3

// const box = document.querySelector(".box");

// const handleBox = (event) => {
//   const x = event.screenX;
//   const y = event.screenY;
//   console.log(`X=${x} Y=${y}`);
// };
// const debouncedHandleBox = _.debounce(handleBox, 500);

// document.addEventListener("mousemove", debouncedHandleBox);
