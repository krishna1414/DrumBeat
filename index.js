document.addEventListener("keypress", play);
function playTheDrum(i) {
  setTimeout(function () {
    document
      .querySelectorAll(".drum")
      [i].setAttribute("style", "border-color:grey");
  }, 100);
  console.log("hii");
}
function playw() {
  new Audio("sounds/crash.mp3").play();
  document
    .querySelectorAll(".drum")[0]
    .setAttribute("style", "border-color: black");
  playTheDrum(0);
}
function playa() {
  new Audio("sounds/kick-bass.mp3").play();
  document
    .querySelectorAll(".drum")[1]
    .setAttribute("style", "border-color: black");
  playTheDrum(1);
}
function plays() {
  new Audio("sounds/snare.mp3").play();
  document
    .querySelectorAll(".drum")[2]
    .setAttribute("style", "border-color: black");
  playTheDrum(2);
}
function playd() {
  new Audio("sounds/tom-1.mp3").play();
  document
    .querySelectorAll(".drum")[3]
    .setAttribute("style", "border-color: black");
  playTheDrum(3);
}
function playj() {
  new Audio("sounds/tom-2.mp3").play();
  document
    .querySelectorAll(".drum")[4]
    .setAttribute("style", "border-color: black");
  playTheDrum(4);
}
function playk() {
  new Audio("sounds/tom-3.mp3").play();
  document
    .querySelectorAll(".drum")[5]
    .setAttribute("style", "border-color: black");
  playTheDrum(5);
}
function playl() {
  new Audio("sounds/tom-4.mp3").play();
  document
    .querySelectorAll(".drum")[6]
    .setAttribute("style", "border-color: black");
  playTheDrum(6);
}
function play(event) {
  switch (event.key) {
    case "w":
      playw();
      break;
    case "a":
      playa();
      break;
    case "s":
      plays();
      break;
    case "d":
      playd();
      break;
    case "j":
      playj();
      break;
    case "k":
      playk();
      break;
    case "l":
      playl();
      break;
    default:
      alert("invalid choice");
  }
}
document.querySelectorAll(".drum")[0].addEventListener("click",playw);
document.querySelectorAll(".drum")[1].addEventListener("click",playa);
document.querySelectorAll(".drum")[2].addEventListener("click",plays);
document.querySelectorAll(".drum")[3].addEventListener("click",playd);
document.querySelectorAll(".drum")[4].addEventListener("click",playj);
document.querySelectorAll(".drum")[5].addEventListener("click",playk);
document.querySelectorAll(".drum")[6].addEventListener("click",playl);
