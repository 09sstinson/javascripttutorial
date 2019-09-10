import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Brick from './brick.js';
import {
  buildLevel,
  levels
} from './levels.js';

const GAMESTATE = {
  running: 0,
  menu: 1,
  paused: 2,
  gameOver: 3,
  newLevel: 4
};

export default class Game {

  constructor(canvas) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.numberOfBricks = 10;
    this.brickHeight = 20;
    this.gameState = GAMESTATE.menu;
    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    new InputHandler(this);
    this.gameObjects = [];
    this.bricks = [];
    this.currentLevel = 0;
  }

  start() {
    if (
      this.gameState != GAMESTATE.menu &&
      this.gameState != GAMESTATE.newLevel
    ) return;

    this.gameState = GAMESTATE.running;
    this.bricks = buildLevel(this, levels[this.currentLevel]);
    this.gameObjects = [this.paddle, this.ball];
    this.lives = 3;
  }

  togglePause() {
    if (this.gameState == GAMESTATE.paused) {
      this.gameState = GAMESTATE.running;
    } else if (this.gameState == GAMESTATE.running) {
      console.log(GAMESTATE.paused);
      this.gameState = GAMESTATE.paused;
    }
  }

  update(deltaTime) {
    if (this.lives == 0) {
      this.gameState = GAMESTATE.gameOver;
    }

    if (this.gameState != GAMESTATE.running) return;

    [...this.gameObjects, ...this.bricks].forEach(object => {
      object.update(deltaTime);
    });

    this.bricks = this.bricks.filter((object) => !object.markedForDeletion);

    if (this.bricks.length == 0) {
      this.currentLevel++;
      this.gameState = GAMESTATE.newLevel;
      this.ball.reset();
      this.start();
    }
  }

  draw(ctx) {
    [...this.gameObjects, ...this.bricks].forEach(function (object) {
      object.draw(ctx);
    });

    switch (this.gameState) {
    case GAMESTATE.paused:
      ctx.rect(0, 0, this.width, this.height);
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fill();
      ctx.font = '30px Arial';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.fillText('Paused', this.width / 2, this.height / 2);
      break;

    case GAMESTATE.menu:
      ctx.rect(0, 0, this.width, this.height);
      ctx.fillStyle = 'rgba(0,0,0,1)';
      ctx.fill();
      ctx.font = '30px Arial';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.fillText('Press SPACEBAR To Start', this.width / 2, this.height / 2);
      break;

    case GAMESTATE.gameOver:
      ctx.rect(0, 0, this.width, this.height);
      ctx.fillStyle = 'rgba(0,0,0,1)';
      ctx.fill();
      ctx.font = '30px Arial';
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.fillText('GAMEOVER', this.width / 2, this.height / 2);
      break;
    }
  }
}