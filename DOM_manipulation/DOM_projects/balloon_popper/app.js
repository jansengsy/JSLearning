const score = document.querySelector('h5');
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const balloonCount = 100;
const balloonRad = 50;
const balloons = [];

canvas.addEventListener('mousemove', moveHandler);

createBalloons();

function createBalloons() {
  let context = canvas.getContext('2d');
  context.canvas.width = window.innerWidth;
  context.canvas.height = window.innerHeight;

  for (let i = 0; i < balloonCount; i++) {
    const balloonX = random(window.innerWidth);
    const balloonY = random(window.innerHeight);
    const balloonCol = `#${random(16777215).toString(16)}`;
    balloons[i] = { x: balloonX, y: balloonY, colour: balloonCol };
    context.beginPath();
    context.arc(balloonX, balloonY, balloonRad, 0, 2 * Math.PI);
    context.fillStyle = balloonCol;
    context.fill();
    context.stroke();
  }
}

function drawBalloons() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  balloons.forEach((balloon) => {
    context.beginPath();
    context.arc(balloon.x, balloon.y, balloonRad, 0, 2 * Math.PI);
    context.fillStyle = balloon.colour;
    context.fill();
    context.stroke();
  });
}

function moveHandler(e) {
  balloons.forEach((balloon, index) => {
    let dx = e.offsetX - balloon.x;
    let dy = e.offsetY - balloon.y;
    let d = Math.sqrt(dx * dx + dy * dy);
    if (d < 50) {
      balloons.splice(index, 1);
      drawBalloons();
    }
  });
}

function random(range) {
  return Math.floor(Math.random() * range + 1);
}
