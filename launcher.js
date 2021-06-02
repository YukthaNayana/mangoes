class Launcher{
    constructor(bodyA, pointB){
        var launcher;
        var options = {
            pointA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
       this.pointA=bodyA.position;
        this.pointB = pointB;
       this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    attach(body){
        this.launcher.pointA = body;
    }
    
    fly(){
        this.launcher.pointA = null;
    }

    display(){
        push();
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            
            
            stroke(48,22,8);
           
            
            pop();
        }
    }
    
}