let ball = [];
const numberOfBalls = 88;
 

function setup() {
  createCanvas(600, 400); 
  
  for(var i = 0; i < numberOfBalls; i++){
  ball[i] = new Ball();
  }
}

function draw() {
  background(0);
  
  for(var i = 0; i < ball.length; i++){
  	ball[i].move();
    ball[i].show();
    ball[i].bounce();
    
  }
}

class Ball{
	constructor(){
  	this.x = random(0, width);
    this.y = random(0, height);
    this.xspeed = random(1, 5);
  	this.yspeed = random(1, 5);
    this.rcolor = random(255);
    this.bcolor = random(255);
    this.gcolor = random(255);
  }
  
  show(){
  	fill(this.rcolor, this.gcolor, this.bcolor);
  	ellipse(this.x, this.y, 20, 20);
  }

	move(){
  	this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

	bounce(){
  	if(this.x > width || this.x < 0){
    	this.xspeed = this.xspeed * -1;
    }
    if(this.y > height || this.y < 0){
    	this.yspeed = this.yspeed * -1;
    }
  }

}
