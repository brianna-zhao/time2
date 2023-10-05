function setup() {
  createCanvas(600, 500);
 
}
let h, mi, s,x,y;

function draw() {

  
  h = hour();
  mi = minute();
  
  if (h===0||h===1||h===2||h===3||h===4||h===5||h===19||h===20||h===21||h===22||h===23||h===24){
    frameRate(1)
    background(10,10,60);
    stroke(10,10,60);
    fill(240,240,100);
    circle(250,250,50);
    fill(10,10,60);
    circle(270,230,50);
    for (let i = 0; i < h; i++) {
      x=random(0,600);
      y=random(0,500);
      strokeWeight(20);
      stroke(255);
      point(x,y);
    }
    for (let j = 0; j < mi; j++) {
      x=random(0,600);
      y=random(0,500);
      strokeWeight(10);
      stroke(255);
      point(x,y);
  }
  }
  
  if(h===6||h===7||h===8||h===9||h===10||h===11||h===12||h===13||h===14||h===15||h===16||h===17||h===18){
    background(150,150,255);
    strokeWeight(1);
    stroke(255,100,100);
    fill(255,100,100);
    circle(300,250,50);
    frameRate(1);
    for (let i = 0; i < mi; i++) {
      x=random(0,600);
      y=random(0,500);
      strokeWeight(15);
      stroke(100,255,100);
      point(x,y);
    }
    for (let j = 0; j < h; j++) {
      x=random(0,600);
      y=random(0,500);
      strokeWeight(25);
      stroke(250,250,50);
      point(x,y);
      
    }

  }
}

