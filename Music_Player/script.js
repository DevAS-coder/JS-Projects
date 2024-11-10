var audio = document.getElementById("audioplay");
var musicTime = document.querySelector(".allTime");
var playBtn = document.querySelector(".playsong");
var prBar = document.querySelector(".prBar");
var crTime = document.querySelector(".currentTime");
var prFill = document.querySelector(".prFill");

audio.load();

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}

audio.addEventListener("timeupdate", () => {
  crTime.innerHTML = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  musicTime.innerHTML = formatTime(audio.duration);
});

let getCurrentTime;
let prFillWidth;
let Current_Time;

playBtn.addEventListener("click", () => {
  if (playBtn.getAttribute("src") == "assets/icon/play.png") {
    playBtn.src = "assets/icon/pause.png";
    audio.play();
    getCurrentTime = setInterval(() => {
      Current_Time = Math.floor(audio.currentTime);
      prFillWidth = (Current_Time * 100) / Math.floor(audio.duration);
      prFill.style.width = "" + prFillWidth + "%";

      if (Current_Time == Math.floor(audio.duration)) {
        playBtn.src = "assets/icon/play.png";
        crTime.innerHTML = "00:00";
        prFill.style.width = "0%";
      }
    }, 1000);
  } else {
    playBtn.src = "assets/icon/play.png";
    audio.pause();
    clearInterval(getCurrentTime);
  }
});

prBar.addEventListener("click", (e) => {
  var OffsetX = (e["offsetX"] * 100) / 360;
  prFill.style.width = "" + OffsetX + "%";
  var new_current_time = (Math.floor(audio.duration) * OffsetX) / 100;
  audio.currentTime = new_current_time;
});
