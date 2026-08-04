function randomColor() {
  let val1 = Math.floor(Math.random() * 256);
  let val2 = Math.floor(Math.random() * 256);
  let val3 = Math.floor(Math.random() * 256);
  return `RGB(${val1}, ${val2}, ${val3})`;
}

let button = document.getElementById("generate");

button.addEventListener("click", function () {
  for (let i = 1; i < 6; i++) {
    let color = randomColor();
    document.querySelector(".box" + i).style.backgroundColor = color;
    document.querySelector(".box" + i).style.cursor = "pointer";
    document.getElementById("code" + i).innerText = color;
  }
});

let boxes = document.querySelectorAll(".box");

for (let box of boxes) {
  box.addEventListener("click", function () {
    navigator.clipboard.writeText(box.style.backgroundColor);
    alert("Copied!");
  });
}
let copyButton = document.getElementById("copy");
copyButton.addEventListener("click", function () {
  let colors = [];

  for (let i = 1; i < 6; i++) {
    let color = document.getElementById("code" + i).innerText;
    colors.push(color);
  }
  navigator.clipboard.writeText(colors.join("\n"));
  alert("Palette copied!");
});

 AOS.init();