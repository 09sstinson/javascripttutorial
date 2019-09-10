import Game from './game.js';

let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext('2d');
var snd = new Audio("assets/sounds/test.wav");
//snd.play();
let game = new Game(canvas);
let lastTime = 0;

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  game.update(deltaTime);
  game.draw(ctx);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);