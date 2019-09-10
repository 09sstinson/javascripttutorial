export function colliding(ball, gameObject) {
  let ballBottom = ball.position.y + ball.height;
  let ballTop = ball.position.y;
  let ballLeft = ball.position.x;
  let ballRight = ball.position.x + ball.width;

  let objectBottom = gameObject.position.y + gameObject.height;
  let objectTop = gameObject.position.y;
  let objectLeft = gameObject.position.x;
  let objectRight = gameObject.position.x + gameObject.width;

  if (
    ballRight <= objectLeft ||
    ballLeft >= objectRight ||
    ballBottom <= objectTop ||
    ballTop >= objectBottom
  ) return false;

  return true;

}

export function resolveCollision(ball, gameObject) {
  let ballBottom = ball.position.y + ball.height;
  let ballTop = ball.position.y;
  let ballLeft = ball.position.x;
  let ballRight = ball.position.x + ball.width;

  let oldBallBottom = ball.oldPosition.y + ball.height;
  let oldBallTop = ball.oldPosition.y;
  let oldBallLeft = ball.oldPosition.x;
  let oldBallRight = ball.oldPosition.x + ball.width;

  let objectBottom = gameObject.position.y + gameObject.height;
  let objectTop = gameObject.position.y;
  let objectLeft = gameObject.position.x;
  let objectRight = gameObject.position.x + gameObject.width;

  let oldObjectBottom = gameObject.oldPosition.y + gameObject.height;
  let oldObjectTop = gameObject.oldPosition.y;
  let oldObjectLeft = gameObject.oldPosition.x;
  let oldObjectRight = gameObject.oldPosition.x + gameObject.width;

  if (ballBottom >= objectTop && oldBallBottom <= oldObjectTop) {
    ball.speed.y *= -1;
    ball.position.y = -ball.height + objectTop;
  } else if (ballTop <= objectBottom && oldBallTop >= oldObjectBottom) {
    ball.speed.y *= -1;
    ball.position.y = objectBottom;
  } else if (ballRight >= objectLeft && oldBallRight <= oldObjectLeft) {
    ball.speed.x *= -1;
    ball.position.x = objectLeft - ball.width;
  } else if (ballLeft <= objectRight && oldBallLeft >= oldObjectRight) {
    ball.speed.x *= -1;
    ball.position.x = objectRight;
  }
  return;
}