let mouse = { x: 300, y: 300 };
let progress = 0;
let direction = 0;
let returnTimer = null;

function setup() {
  createCanvas(600, 400);
}

function mouseMoved() {
  mouse.x = mouseX;
  mouse.y = mouseY;
}

function mouseClicked() {
  if (returnTimer) clearTimeout(returnTimer);
  direction = 1;
  returnTimer = setTimeout(() => { direction = -1; }, 2000);
}

function draw() {
  // 진행도 업데이트
  const velocity = 0.055;
  if (direction === 1) {
    progress = min(1, progress + velocity);
    if (progress >= 1) direction = 0;
  } else if (direction === -1) {
    progress = max(0, progress - velocity);
    if (progress <= 0) direction = 0;
  }

  const p = progress;

  background('#232338');

  // 목
  noStroke();
  fill('#F7DDA8');
  rect(275, 295, 50, 60, 5);

  // 얼굴
  fill('#FFE1AB');
  ellipse(300, 220, 170, 190);

  // 눈 흰자
  const eyeOpenH = lerp(22, 38, p);
  fill(255);
  ellipse(270, 215, 38, eyeOpenH);
  ellipse(330, 215, 38, eyeOpenH);

  // 눈동자 — 마우스 따라가기 (놀랄 땐 정면 고정)
  const maxOffset = lerp(5, 0, p);
  const lOff = getPupilOffset(270, 215, maxOffset);
  const rOff = getPupilOffset(330, 215, maxOffset);
  const pupilSize = lerp(20, 26, p);

  fill('#3D2B1F');
  ellipse(270 + lOff.x, 216 + lOff.y, pupilSize, pupilSize);
  ellipse(330 + rOff.x, 216 + rOff.y, pupilSize, pupilSize);

  // 하이라이트
  fill(255);
  ellipse(270 + lOff.x + 3, 213 + lOff.y - 2, 6, 6);
  ellipse(330 + rOff.x + 3, 213 + rOff.y - 2, 6, 6);

  // 눈썹 (놀라면 위로)
  const browY = lerp(0, -10, p);
  fill('#2A1F14');
  beginShape();
  vertex(250, 198 + browY); vertex(255, 194 + browY);
  vertex(290, 192 + browY); vertex(288, 198 + browY);
  endShape(CLOSE);
  beginShape();
  vertex(312, 192 + browY); vertex(345, 194 + browY);
  vertex(350, 198 + browY); vertex(312, 198 + browY);
  endShape(CLOSE);

  // 눈 윤곽선 (속눈썹 라인)
  fill('#1a1008');
  beginShape();
  vertex(251, 215);
  bezierVertex(251, 207, 258, 204, 270, 204);
  bezierVertex(282, 204, 289, 207, 289, 215);
  bezierVertex(283, 211, 257, 211, 251, 215);
  endShape(CLOSE);
  beginShape();
  vertex(311, 215);
  bezierVertex(311, 207, 318, 204, 330, 204);
  bezierVertex(342, 204, 349, 207, 349, 215);
  bezierVertex(343, 211, 317, 211, 311, 215);
  endShape(CLOSE);

  // 머리카락
  fill('#1a1008');
  beginShape();
  vertex(212, 232);
  bezierVertex(210, 205, 212, 175, 218, 158);
  bezierVertex(232, 128, 265, 115, 300, 115);
  bezierVertex(335, 115, 368, 128, 382, 158);
  bezierVertex(388, 175, 390, 205, 388, 232);
  vertex(375, 207); vertex(363, 193); vertex(350, 206);
  vertex(337, 189); vertex(324, 202); vertex(311, 184);
  vertex(300, 198); vertex(289, 184); vertex(276, 202);
  vertex(263, 189); vertex(250, 206); vertex(237, 193);
  vertex(225, 207);
  endShape(CLOSE);

  noFill();
  if (p < 0.25) {
    stroke('#3D2B1F');
    strokeWeight(2.5);
    arc(300, 258, 50, 30, radians(10), radians(170));
  } else {
    noStroke();
    const mW = lerp(36, 32, p);
    const mH = lerp(8, 36, (p - 0.25) / 0.75);
    const mY = lerp(258, 264, p);
    fill('#3D2B1F');
    ellipse(300, mY, mW, mH + 4);
    if (p > 0.4) {
      fill('#1a0a05');
      ellipse(300, mY + 1, mW - 6, mH - 4);
    }
  }

  // 흰색 라운드넥 티셔츠
  noStroke();
  fill(255);
  beginShape();
  vertex(240, 305);
  vertex(150, 340);
  vertex(150, 400);
  vertex(450, 400);
  vertex(450, 340);
  vertex(360, 305);
  for (let a = 0; a <= 180; a += 10) {
    let angle = radians(a);
    vertex(300 + cos(angle) * 60, 305 + sin(angle) * 25);
  }
  endShape(CLOSE);

  // 칼라 라인
  noFill();
  stroke(220, 220, 220, 180);
  strokeWeight(2);
  arc(300, 305, 120, 50, radians(0), radians(180));

  // 검은색 뿔테 안경
  noFill();
  stroke(0);
  strokeWeight(5);
  rect(245, 200, 50, 35, 8);
  rect(305, 200, 50, 35, 8);
  strokeWeight(4);
  line(295, 212, 305, 212);
  line(245, 212, 225, 208);
  line(355, 212, 375, 208);
}

function getPupilOffset(eyeX, eyeY, maxDist) {
  const dx = mouse.x - eyeX;
  const dy = mouse.y - eyeY;
  const dist = sqrt(dx * dx + dy * dy);
  const scale = min(dist, maxDist) / (dist || 1);
  return { x: dx * scale, y: dy * scale };
}