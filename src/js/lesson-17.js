// DOM

// console.dir(document);
// console.dir(document.body.childNodes[1]);
// document.body.innerHTML = ""; //deleteeverything from body

// const title = document.body.children[0].children[0];

// title.textContent = "hello";
// console.dir(title.textContent);

// console.log(title.parentNode);
// title.parentNode.classList.add("container");

// const box = title.parentNode;
// console.log(box.firstChild);
// console.log(box.lastElementChild);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling); //nul бо перед h2 нікого немає
// console.log(title.nextElementSibling.previousElementSibling); //знов викликали сам h2

//Методи щоб знайти зразу через селектори
// const Texttitle = document.querySelector(".title"); //повертає перший знайдений елемент

// const element = document.querySelectorAll(".title");

// const texttitle = document.querySelector("[data-title]");
// console.log(texttitle);

// const elements = document.querySelectorAll("ul a");
// console.log(elements);
// elements.forEach((link) => (link.style.fontSize = "3em"));

// const checkbox = document.querySelector("[type='checkbox']");

// const image = document.querySelector("img");
// image.alt = "ракета";
// image.src = "";
// console.log(image.alt);

// checkbox.hidden = true;

// const title = document.querySelector("title");

// title.style.backgroundColor = "blue";
// console.log(title.style.backgroundColor);

// console.log(title.classList);

// //Робота з класами
// title.classList.add("section-title"); //додавання класу
// title.classList.remove("title"); //видалення класу
// title.classList.toggle("togle"); //якщо такого класу нема то він його додасть, а якщо він є то він його видалить
// console.log(title.classList.contains("section-title")); //true or false перевіряє наявність класу
// title.classList.replace("title", "big-title"); //заміна класу (перше старий клас потім новий)

//Практичні завдання
//1
// const nav = document.querySelector(".site-nav");

// //2
// nav.style.backgroundColor = "yellow";
// console.log(nav);

// //3
// const firstLink = document.querySelectorAll(".site-nav a")[0];
// firstLink.classList.add("site-nav__link");

// //4
// const targetLink = document.querySelector("[.href='https://]");
// targetLink.style.fontSize = "2em";

//5
const allLinks = document.querySelectorAll("ul a");
allLinks.forEach((link) => {
  console.log(link.href);

  if (link.href.includes("://") && !link.href.includes("127.0.0")) {
    link.style.color = "orange";
  }
});
console.log(allLinks);
