let player = document.getElementById("player");
let btn = document.getElementById("mini-game-btn");

let x = 380;
let y = 280;

function movePlayer() {
  player.style.left = x + "px";
  player.style.top = y + "px";

  if (x > 360 && x < 400 && y > 260 && y < 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") x -= 10;
  if (e.key === "ArrowRight") x += 10;
  if (e.key === "ArrowUp") y -= 10;
  if (e.key === "ArrowDown") y += 10;
  movePlayer();
});

function openMiniGame() {
  window.location.href = "mini-game.html";
}

movePlayer();