
class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        }
        display(){
            var pointA= this.rope.bodyA.position;
            var pointB= this.rope.bodyB.position;

            //stroke(0);
            strokeWeight (1)
            var roof1X = pointA.x
            var roof1Y = pointA.y
            
            var roof2X = pointB.x+this.offsetX
            var roof2Y = pointB.y+this.offsetY
            line (roof1X,roof1Y,roof2X,roof2Y);
        }
        
}
