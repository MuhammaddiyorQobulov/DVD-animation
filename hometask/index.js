const container = document.querySelector(".container");

function randomColor() {
  let a = "#";
  for (let i = 0; i < 3; i++) {
    a += Math.floor(Math.random() * 9) + 1;
  }
  return a;
}

function randomSon(b) {
  let a = Math.floor(Math.random() * b) + 1;
  return a;
}

function renderBox(count) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = count + 1;
  box.style.background = randomColor();
  container.appendChild(box);

  let randomSon1 = randomSon(634);
  let randomSon2 = randomSon(634);
  let argumentX = randomSon(5);
  let argumentY = randomSon(5);
  let x = 0;
  let y = 0;

  setInterval(() => {
    x = x + argumentX;
    y = y + argumentY;
    if (randomSon2 + x > 640 || randomSon2 + x < 0) {
      argumentX = argumentX * -1;
    }
    if (randomSon1 + y > 640 || randomSon1 + y < 0) {
      argumentY = argumentY * -1;
    }
    box.style.margin = `${randomSon1 + y}px 0 0 ${randomSon2 + x}px `;
  }, 20);
}

let count = Math.floor(prompt("Sharlar Sonini Kiriting"));

for (let i = 0; i < count; i++) {
  renderBox(i);
}
