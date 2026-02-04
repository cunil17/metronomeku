let bpm = 120;
let playing = false;
let timer;

const bpmText = document.getElementById("bpm");
const beat = document.getElementById("beat");
const playBtn = document.getElementById("play");

function updateBpm() {
  bpmText.textContent = bpm;
}

function start() {
  const interval = 60000 / bpm;

  timer = setInterval(() => {
    beat.classList.add("active");
    setTimeout(() => beat.classList.remove("active"), 100);
  }, interval);
}

playBtn.onclick = () => {
  if (!playing) {
    start();
    playBtn.textContent = "STOP";
  } else {
    clearInterval(timer);
    playBtn.textContent = "PLAY";
  }
  playing = !playing;
};

document.getElementById("plus").onclick = () => {
  bpm += 5;
  updateBpm();
  if (playing) {
    clearInterval(timer);
    start();
  }
};

document.getElementById("minus").onclick = () => {
  bpm = Math.max(40, bpm - 5);
  updateBpm();
  if (playing) {
    clearInterval(timer);
    start();
  }
}
