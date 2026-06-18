let xPos, xDir;
let yPos, yDir;
let diam;
let speed;

let padX;
let padWidth; 

let score = 0;
let gameOver = false;

let bricks = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

function setup() {
  createCanvas(600, 600);
  resetGame();
}

function draw() {
  background(15, 18, 35);

  if (gameOver) {
    background(30, 0, 0);

    fill(255, 80, 80);
    textAlign(CENTER, CENTER);
    textSize(42);
    text("GAME OVER", width / 2, height / 2 - 20);

    fill(255);
    textSize(24);
    text("Score: " + score, width / 2, height / 2 + 30);

    fill(255, 220, 120);
    textSize(20);
    text("Press R to Restart", width / 2, height / 2 + 70);
    return;
  }

  bricksDrawing();
  ballDrawingMovement();
  padDrawingMovement();
  ballBouncing();
  bricksBallCollision();
  drawScore();

  if (yPos + diam / 2 >= height) {
    gameOver = true;
  }
}

function bricksDrawing() {
  stroke(255);
  strokeWeight(2);

  for (let r = 0; r < bricks.length; r++) {
    for (let c = 0; c < bricks[r].length; c++) {
      if (bricks[r][c] === 1) {
        fill(80, 200, 255);
        rect(c * 50, r * 50, 50, 50, 8);
      }
    }
  }
}

function bricksBallCollision() {
  if (
    yPos < 50 * bricks.length &&
    bricks[int(yPos / 50)][int(xPos / 50)] === 1
  ) {
    yDir *= -1;
    bricks[int(yPos / 50)][int(xPos / 50)] = 0;
    score += 1;
  }
}

function variableInitialization() {
  speed = 4;
  xPos = width / 2;
  xDir = speed;
  yPos = height / 2;
  yDir = speed;
  diam = 20;
  padWidth = 160;
}

function resetGame() {
  variableInitialization();
  score = 0;
  gameOver = false;

  bricks = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
}

function ballDrawingMovement() {
  noStroke();
  fill(255, 220, 60);
  ellipse(xPos, yPos, diam, diam);

  xPos = xPos + xDir;
  yPos = yPos + yDir;
}

function padDrawingMovement() {
  padX = mouseX - padWidth / 2;

  fill(120, 255, 120);
  rect(padX, height - 30, padWidth, 20, 10);
}

function ballBouncing() {
  if (xPos - diam / 2 < 0) xDir *= -1; 
  if (xPos + diam / 2 > width) xDir *= -1;
  if (yPos - diam / 2 < 0) yDir *= -1;

  if (
    xPos > padX &&
    xPos < padX + padWidth &&
    yPos > height - 30 - diam / 2
  ) {
    yDir *= -1;
  }
}

function drawScore() {
  fill(255);
  textSize(24);
  textAlign(LEFT, TOP);
  text("Score: " + score, 15, 15);
}
function keyPressed() {
  if (gameOver && (key === 'r' || key === 'R')) {
    resetGame();
  }
}