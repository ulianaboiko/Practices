// const targetElement = document.querySelector(".js-container");
// const handleClick = (event) => {
//   //   console.log(event.target);
//   //   event.target.textContent = "click";
//   //   console.log(event.currentTarget);

//   if (event.target.classList.contains === "js-btn") {
//     const action = event.target.dataset.action;
//     console.log(action);
//     //     if (!action) return;
//     //     if (action === "sort") {
//     //       console.log("сортуємо");
//     //     }
//     //     if (action === "delete") {
//     //       console.log("видаляємо");
//     //     }
//   }
// };
// targetElement.addEventListener("click", handleClick);

// //1
// const palette = document.querySelector(".color-palette");

// const handleColorPick = (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const target = event.target;
//     const color = target.dataset.color;
//     event.currentTarget.style.backgroundColor = color;
//     target.style.color = color;
//   }
// };

// palette.addEventListener("click", handleColorPick);

// //2
// const userList = document.querySelector("#userList");

// const handleDelete = (event) => {
//   if (event.target.classList.contains("deleteButton")) {
//     const item = event.target.closest("li");
//     item.remove();
//   }
// };

// userList.addEventListener("click", handleDelete);

//ПРОДОВЖЕННЯ ЗАНЯТТЯ

const toggle = document.querySelector("#toggle");
const menu = document.querySelector("#menu");

const handleToggle = (event) => {
  event.stopPropagation();
  menu.hidden = !menu.hidden;
};

toggle.addEventListener("click", handleToggle);

document.addEventListener("click", () => {
  menu.hidden = true;
});
