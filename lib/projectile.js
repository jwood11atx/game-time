function Projectile(x, y, player){
  this.x = x;
  this.y = y;
  this.width = 15;
  this.height = 15;
  this.speed = 25;
  this.player = player;
  this.velocityX = 0;
  this.velocityY = 0;
  this.img = new Image();

  this.draw = function(){
    console.log(this.player);
    if(this.player === "player1"){
      this.img.src = "./images/yarnBall.png";
    }
    if(this.player === "player2"){
      this.img.src = "./images/tennisBall.png";
    }

    // this.img.src = "./images/yarnBall.png";
    context.drawImage(
      this.img, 0, 0, 50, 50, this.x, this.y, this.width, this.height
    );
    // context.fillRect(this.x, this.y, this.width, this.height);
  }
}