function setup() {
  createCanvas(600, 400);
  noStroke();
  background('#232338')
  fill('#F7DDA8');   // 목 영역
  rect(275, 295, 50, 60, 5);
  fill('#FFE1AB');  // 얼굴형
  ellipse(300, 220, 170, 190);
  fill(255);  // 눈 흰자
  ellipse(270, 215, 38, 22);
  ellipse(330, 215, 38, 22);
  fill('#3D2B1F');  // 눈동자와 눈광
  ellipse(270, 216, 20, 20);
  ellipse(330, 216, 20, 20);
  fill(255);
  ellipse(275, 212, 6, 6);
  ellipse(335, 212, 6, 6);
  fill('#2A1F14');  // 눈썹
  beginShape();
  vertex(250, 198);
  vertex(255, 194);
  vertex(290, 192);
  vertex(288, 198);
  endShape(CLOSE);
  beginShape();
  vertex(312, 192);
  vertex(345, 194);
  vertex(350, 198);
  vertex(312, 198);
  endShape(CLOSE);
  fill('#1a1008');  // 눈 윤곽선 (속눈썹 라인)
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
  fill('#1a1008');    // 머리카락 스타일
  beginShape();
  vertex(212, 232);
  bezierVertex(210, 205, 212, 175, 218, 158);
  bezierVertex(232, 128, 265, 115, 300, 115);
  bezierVertex(335, 115, 368, 128, 382, 158);
  bezierVertex(388, 175, 390, 205, 388, 232);
  vertex(375, 207);
  vertex(363, 193);
  vertex(350, 206);
  vertex(337, 189);
  vertex(324, 202);
  vertex(311, 184);
  vertex(300, 198);
  vertex(289, 184);
  vertex(276, 202);
  vertex(263, 189);
  vertex(250, 206);
  vertex(237, 193);
  vertex(225, 207);
  endShape(CLOSE);
  noFill();
  stroke('#3D2B1F');    // 입 모양
  strokeWeight(2.5);
  arc(300, 258, 50, 30, radians(10), radians(170));
  fill(255);
  noStroke();
  
  beginShape();// 흰색 라운드넥 티셔츠
  vertex(240, 305); 
  vertex(150, 340);
  vertex(150, 400);
  vertex(450, 400);
  vertex(450, 340);
  vertex(360, 305);
  for (let a = 0; a <= 180; a += 10) {
    let angle = radians(a);
    let x = 300 + cos(angle) * 60;
    let y = 305 + sin(angle) * 25;
    vertex(x, y);
  }
  endShape(CLOSE);
  noFill();    // 검은색 뿔테 안경
  stroke(240)
  strokeWeight(2);
  arc(300, 305, 120, 50, radians(0), radians(180));
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