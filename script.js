const container = document.querySelector(".container");
const denseBtn = document.getElementById("dense");

function makeBoxes() {
  for (let i = 1; i <= 40; i++) {
    const box = document.createElement("div");
    box.textContent = `Big #${i}`;
    box.style.gridColumn = `span ${randomNum(3, 1)}`;
    box.style.gridRow = `span ${randomNum(3, 1)}`;
    box.style.backgroundColor = `hsl(${randomNum(360, 0)}, 100%, 50%)`;
    box.classList.add("boxes");
    container.append(box);
  }
}
function makeSmallBoxes() {
  for (let i = 1; i <= 10; i++) {
    const box = document.createElement("div");
    box.textContent = `Small #${i}`;

    box.style.gridColumn = `span ${randomNum(1, 1)}`;
    box.style.gridRow = `span ${randomNum(1, 1)}`;
    box.style.backgroundColor = `hsl(${randomNum(360, 0)}, 100%, 50%)`;
    box.classList.add("boxes");
    container.append(box);
  }
}
function randomNum(limit, type) {
  return Math.floor(Math.random() * limit) + type;
}
makeBoxes();
makeSmallBoxes();

denseBtn.addEventListener("click", () => {
  container.classList.toggle("dense");
});
