function randomColor() {
  let val1 = Math.floor(Math.random() * 256);
  let val2 = Math.floor(Math.random() * 256);
  let val3 = Math.floor(Math.random() * 256);
  return `RGB(${val1}, ${val2}, ${val3})`;
}

let button = document.querySelector(".generate");

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
    if (box.style.backgroundColor === "") {
      Swal.fire({
        title: "No Colors Found!",
        text: "Generate a color palette first",
        icon: "error",
      });
      return;
    }
    navigator.clipboard.writeText(box.style.backgroundColor);
    Swal.fire({
      title: "Copied!",
      text: "RGB color copied to clipboard",
      icon: "success",
    });
  });
}
let copyButton = document.querySelector(".copy");
copyButton.addEventListener("click", function () {
  let colors = [];
  for (let i = 1; i < 6; i++) {
    let color = document.getElementById("code" + i).innerText;
    colors.push(color);
  }
  if (colors[0] === "") {
    Swal.fire({
      title: "No Colors Found!",
      text: "Generate a color palette first",
      icon: "error",
    });
    return;
  }
  navigator.clipboard.writeText(colors.join("\n"));
  Swal.fire({
    title: "Copied!",
    text: "Color palette copied to clipboard",
    icon: "success",
  });
});
