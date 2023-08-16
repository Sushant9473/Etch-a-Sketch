let numberOfSquares = prompt("Enter the number of squares per side");
noOfSquares = parseInt(numberOfSquares);
let div = document.querySelector(".parent");
for (let i = 1; i <= noOfSquares; i++) {
  let div1 = document.createElement("div");
  div1.classList.add("child");
  for (let j = 1; j <= noOfSquares; j++) {
    let div2 = document.createElement("div");
    div2.classList.add("subchild");
    div1.appendChild(div2);
  }
  div.appendChild(div1);
}

let html = document.querySelector("html");
let divs = document.querySelectorAll(".subchild");
let isMouseDrag = false;
let parent = document.querySelector(".parent");
parent.addEventListener("mousedown", () => {
  isMouseDrag = true;
});
html.addEventListener("mouseup", () => {
  isMouseDrag = false;
});

divs.forEach((div) => {
  div.addEventListener("mouseover", () => {
    if (isMouseDrag) {
      div.style.backgroundColor = getRandomColor();
    }
  });
  div.addEventListener("mousedown", () => {
    div.style.backgroundColor = getRandomColor();
  });
});

let color = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];
function getRandomColor() {
  let random = Math.floor(Math.random() * color.length);
  return color[random];
}
let width = document.querySelector(".parent").offsetWidth;
let height = width / noOfSquares;
document.querySelectorAll(".subchild").forEach((div) => {
  div.style.height = `${height}px`;
});
// Ask Zaid Bhai

// let div = document.querySelector("div");
// for (let i = 1; i <= 16; i++) {
//   let div1 = document.createElement("div");
//   div1.classList.add("child");
//   for (let j = 1; j <= 16; j++) {
//     let div2 =document.createElement("div");
//     div2.classList.add("subchild");
//     div1.appendChild(div2);
//   }
//   div.appendChild(div1);
// }
