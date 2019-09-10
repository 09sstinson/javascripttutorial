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
    this.maxAngle = 30;
    this.position = {
      x: game.width / 2 - this.width / 2,
      y: game.height - this.height - 30,
    };
    this.oldPosition = {
      x: game.width / 2 - this.width / 2,
      y: game.height - this.height - 30,
    };
    this.isPaddle = true;

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

  collisionAngle() {
    let ballMid = this.game.ball.position.x + this.game.ball.width / 2;
    let paddleMid = this.position.x + this.width / 2;

    let angle = 2 * this.maxAngle * (ballMid - paddleMid) / this.width;

    this.game.ball.speed.x = Math.sin(angle * Math.PI / 180) * this.game.ball.absSpeed;
    this.game.ball.speed.y = -Math.cos(angle * Math.PI / 180) * this.game.ball.absSpeed;




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

      console.log('hit');
    }
  }
}