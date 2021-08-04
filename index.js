const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector(".color__body"),
  startBtn: document.querySelector(".startBtn"),
  stopBtn: document.querySelector(".stopBtn"),
};

let interval = null;

function startColor() {
  refs.startBtn.setAttribute("disabled", true);
  interval = setInterval(() => {
    const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    changeColor(color);
  }, 1000);
}

function stopColor() {
  refs.startBtn.removeAttribute("disabled");
  clearInterval(interval);
}

function changeColor(color) {
  document.body.style.background = color;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener("click", startColor);
refs.stopBtn.addEventListener("click", stopColor);
