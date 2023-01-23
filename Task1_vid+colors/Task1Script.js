window.onload = function () {
  // selections

  let vid = document.querySelector("body > video");

  range = document.querySelector("#range");

  stopBtn = document.querySelector("#stop");

  playBtn = document.querySelector("#play");

  goStartBtn = document.querySelector("#start");

  decrease_5_sec = document.querySelector("#decrease");

  increase_5_sec = document.querySelector("#increase");

  goEnd = document.querySelector("#end");

  speedRandge = document.querySelector("#speedRange");

  let rangeVal = range.value;

  let timer = document.querySelector("#timer");

  let red = document.querySelector("#red");

  let green = document.querySelector("#green");

  let blue = document.querySelector("#blue");

  let para = document.querySelector("body > p");

  let colors = document.querySelectorAll("#ranges>div>input");

  // fun to change Timer

  timer.innerText = `${parseInt(vid.currentTime)} / ${parseInt(vid.duration / 60)} : ${Math.ceil(vid.duration % 60)}`; // initioal vlaue

  vid.addEventListener("timeupdate", function (ev) {
    // claculate  seconds function

    timer.innerText = `${parseInt(ev.target.currentTime / 60)} : ${Math.ceil(
      ev.target.currentTime % 60
    )} / ${parseInt(vid.duration / 60)} : ${Math.ceil(vid.duration % 60)}`;

    range.value = ev.target.currentTime;
  });

  range.onmouseup = function (event) {
    // range change while the time
    vid.currentTime = this.value;
  };
  playBtn.onclick = (event) => {
    // play
    vid.play();
  };

  stopBtn.onclick = () => {
    // pause
    vid.pause();
  };
  goStartBtn.onclick = function () {
    // to zero seconds Go
    range.value = 0;
    vid.currentTime = 0;
  };
  increase_5_sec.onclick = function () {
    // increas 5 sec
    range.value = Number(range.value) + 5;
    vid.currentTime += 5;
    console.log(range.value);
  };
  decrease_5_sec.onclick = function () {
    // decrease 5 sec
    range.value = Number(range.value) - 5;
    vid.currentTime -= 5;
  };
  goEnd.onclick = function () {
    // go to end fun
    range.value = vid.duration;
    vid.currentTime = vid.duration;
  };

  speedRandge.onmouseup = function (event) {
    // control thee speed of play video
    vid.playbackRate = this.value;
  };

  document.getElementById("volumeRange").onmouseup = function () {
    vid.volume = Number(this.value);
    console.log(vid.volume);
    console.log(Number(this.value));
  };

  // Task 2
  for (let i in colors) {
    colors[i].onmouseup = function (event) {
      // the colors control ==========>
      para.style.color = `rgb(${red.value},${green.value},${blue.value})`;
    };
  }
};
