import {
  resolveCollision,
  colliding
} from './collisionDetection.js';
export default class Paddle {

  constructor(game) {
    this.image = document.getElementById('imgPaddle');
    this.width = 150;
    this.height = 30;
    this.maxSpeed = 5;
    this.speed = 0;
    this.game = game;
    this.position = {
      x: game.width / 2 - this.width / 2,
      y: game.height - this.height - 30,
    };
    this.oldPosition = {
      x: game.width / 2 - this.width / 2,
      y: game.height - this.height - 30,
    };

  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;


  }

  stop() {
    this.speed = 0;
  }

  update(deltaTime) {

    this.oldPosition.x = this.position.x;
    this.oldPosition.y = this.position.y;
    this.position.x += this.speed;

    if (this.position.x < 0) {
      this.position.x = 0;
    }
    if (this.position.x > this.game.width - this.width) {
      this.position.x = this.game.width - this.width;
    }

    if (colliding(this.game.ball, this)) {
      resolveCollision(this.game.ball, this);
    }
  }
}