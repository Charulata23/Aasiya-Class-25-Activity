class Bird extends BaseClass{
  //Bird class is child/ sub class
  //Baseclass is parent / base class
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}