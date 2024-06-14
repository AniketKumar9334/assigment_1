const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timer = document.getElementById("timer");

let isStart = false;
let count = 0;
let second = 0;
let miniut = 0;
let timeInterval 
function startTimer() {
  if (!isStart) {
    timeInterval = setInterval(() => {
      count++;
      miniut = Math.floor((count / 60) % 60);
      second = Math.floor(count % 60);

      displayTime(miniut, second);
    }, 1000);
  }
  isStart = true;
}
function stopTime(){
    clearInterval(timeInterval)
    isStart = false
}
function resetTime(){
    clearInterval(timeInterval)
    isStart = false;
    count = 0
    second = 0
    miniut = 0
    displayTime()
}
startBtn.addEventListener("click", () => {
  startTimer();
});
stopBtn.addEventListener("click", ()=>{
    stopTime()
})
resetBtn.addEventListener('click', ()=>{
    resetTime()
})
const displayTime = () => {
  if (miniut < 60) {
    timer.innerHTML = `${miniut <= 9 ? 0 : ""}${miniut}:${
      second <= 9 ? 0 : ""
    }${second}`;
  }else{
    timer.innerHTML = "Time's up!"
  }
};

