import {
  resolveCollision,
  colliding
} from './collisionDetection.js';
export default class Brick {

  constructor(game, position) {
    this.image = document.getElementById('imgBrick');
    this.position = this.oldPosition = position;

    this.width = game.width / game.numberOfBricks - 1;
    this.height = game.brickHeight - 1;
    this.game = game;
    this.markedForDeletion = false;
  }

  update(deltaTime) {
    if (colliding(this.game.ball, this)) {
      resolveCollision(this.game.ball, this);
      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height);
  }
}