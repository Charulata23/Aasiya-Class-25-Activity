class Log extends BaseClass {
  //child class of baseclass
  //DRY : Dont Repeat Yourself
    constructor(x, y, height, angle) {
      //super function inherits properties from Baseclass
      super(x,y,20,height,angle);
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body, angle);
      
    }
    
  };
  