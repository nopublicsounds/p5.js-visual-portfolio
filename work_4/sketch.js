function setup() {
  createCanvas(600, 400);
  frameRate(60); 
}

function draw() {
  background('#FFFFFF');
  stroke('#000000');
  strokeWeight(10);
  
  let wave = sin(frameCount * 0.05); 
  let waveSlow = sin(frameCount * 0.02);
  let waveFast = cos(frameCount * 0.08);

  let redA = color('#F22E2E');
  let redB = color('#8A1515'); 
  let blueA = color('#2E42F2');
  let blueB = color('#141F8F');
  let yellowA = color('#F2C12E');
  let yellowB = color('#9E7B16'); 
  
  let amt = map(wave, -1, 1, 0, 1);

  fill('#FFFFFF');
  rect(0, 0, 200 + wave * 10, 200 + wave * 10);
  fill(lerpColor(redA, redB, amt));
  rect(200 + wave * 5, 0, 100, 150);
  fill(lerpColor(blueA, blueB, amt));
  rect(200, 150, 200 + waveSlow * 15, 150 + waveFast * 10);
  fill(lerpColor(yellowA, yellowB, amt));
  rect(300, 0 + waveSlow * 8, 150, 100);
  fill('#2E42F2');
  rect(450 + wave * 5, 0, 150 - wave * 5, 200);
  fill('#F22E2E');
  rect(400, 200 + waveFast * 5, 200, 100);
  fill('#FFFFFF');
  rect(400, 300, 100, 100);
  fill(lerpColor(yellowA, yellowB, amt));
  rect(500, 300, 100, 100);
  fill('#FFFFFF');
  rect(0, 200, 200 + waveSlow * 10, 200);
  fill('#F2C12E');
  rect(200 + wave * 5, 300, 200, 100 + wave * 5);
}
