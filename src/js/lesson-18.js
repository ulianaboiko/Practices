//DOM
// const container = document.querySelector(".container");

// const paragraf = document.createElement("p");
// const title = container.querySelector("h2");

// paragraf.classList.add("text");
// paragraf.textContent =
//   "jhkhgffffffffffffffjgggggggggggggggggghjjjjjjjjjjjjgyfu";

// const link = document.createElement("a");
// link.href =
//   "https://www.google.com/webhp?hl=uk&sa=X&ved=0ahUKEwiXkorCzf2MAxX8RPEDHSdhFNkQPAgI";
// WakeLockSentinel.textContent = "Google";
// container.append(paragraf, link); // додати під елемент
// container.before("h2");

// container.appendChild(paragraf);

// title.remove(); //видалення з DOM

// confirm.log(container.innerHTML);
// container.innerHTML = "<img src=".src/cartoon-rocket-white-background-vector-illustration-children-theme-space-astronautics-galactic-adventures_647443-943.avif" alt="ff"/>";

// const buttons = [
//   { label: "Button 1", colorBg: "gold" },
//   { label: "Button 2", colorBg: "aqua" },
//   { label: "Button 3", colorBg: "green" },
//   { label: "Button 4", colorBg: "red" },
//   { label: "Button 5", colorBg: "orange" },
//   { label: "Button 6", colorBg: "tomato" },
//   { label: "Button 7", colorBg: "gold" },
// ];

// const btnList = document.querySelector(".btn-list");
//Шаблонізація через іннерhtml
// const btnListHtml = buttons
//   .map(
//     (button) =>
//       `<li><button style="background-color: ${button.colorBg} ">${button.label}</button>`
//   )
//   .join("");
// btnList.innerHTML = btnListHtml;

//Шаблонізація через createElement

// const btnHtml = [];
// buttons.forEach((button) => {
//   const btn = document.createElement("button");
//   btn.textContent = button.label;
//   btn.style.backgroundColor = button.colorBg;
//   //   btnList.append(btn); //
//   btnHtml.push(btn);
// });
// btnList.append(...btnHtml);

// container.insertAdjacentHTML("afterend", "<p class='text'>Hello</p>");
// container.insertAdjacentElement("beforeend", paragraf);

// const img = container.querySelector(".img");
// console.log(img.getAttribute("alt"));
// console.log(img.setAttribute("alt", "rocket"));
// console.log(img.removeAttribute("class"));

// console.log(img.attributes);
// const sumAction = document.querySelector("[data-action='+']");
// console.log(sumAction.dataset.action);

//Практичні завдання 1-я
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorPicker = document.querySelector(".js-color-picker");

// const colorPickers = [];
// colorPickerOptions.forEach((option) => {
//   const a = document.createElement("a");
//   a.textContent = option.label;
//   a.style.color = option.color;
//   a.setAttribute("href", "#");
//   colorPickers.push(a);
// });
// colorPicker.append(...colorPickers);

//2
const colorPickerHtml = colorPickerOptions
  .map(
    (option) => `<a href="#" style="color: ${option.color}">${option.label}</a>`
  )
  .join(" ");
colorPicker.innerHTML = colorPickerHtml;
