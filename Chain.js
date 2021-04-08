class Chain{
    constructor(bA,bB){
        var Options={
            bodyA:bA,
            bodyB:bB,
            length:50,
            stiffness:0.5
        }

     this.chain = Constraint.create(Options);
     World.add(world,this.chain);
    }

     display(){
      var pointA= this.chain.bodyA.position;
      var pointB= this.chain.bodyB.position;

      line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}