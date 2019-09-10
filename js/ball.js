export default class Ball {
  constructor(game) {
    this.image = document.getElementById('imgBall');
    this.position = {
      x: game.width / 2,
      y: game.height / 2
    };
    this.oldPosition = {
      x: game.width / 2,
      y: game.height / 2
    };
    this.speed = {
      x: 4,
      y: 4
    };
    this.width = 10;
    this.height = 10;
    this.game = game;
  }

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  reset() {
    this.position.x = this.game.width / 2;
    this.position.y = this.game.height / 2;
    this.speed = {
      x: 4,
      y: 4
    };
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    this.oldPosition.x = this.position.x;
    this.oldPosition.y = this.position.y;

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    if (this.position.x > this.game.width - this.width) {
      this.speed.x *= -1;
      this.position.x = this.game.width - this.width;
    } else if (this.position.x < 0) {
      this.speed.x *= -1;
      this.position.x = 0;
    } else if (this.position.y > this.game.height - this.height) {
      this.game.lives--;
      this.reset();
    } else if (this.position.y < 0) {
      this.speed.y *= -1;
      this.position.y = 0;
    }
  }
}