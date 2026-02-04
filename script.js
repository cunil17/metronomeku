let bpm = 120;
let isPlaying = false;
let interval;
let audioCtx = null;

const bpmDisplay = document.getElementById("bpm");
const playBtn = document.getElementById("play");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const beat = document.getElementById("beat");

function playClick() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.frequency.value = 1000; // nada klik
  gain.gain.value = 0.3;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc
