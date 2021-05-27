class Launcher {

    constructor(a,b){
        var options={
            bodyA:a,
            pointB:b,
            stiffness:0.04,
            length:20
        }
        this.launcher = Constraint.create(options);
        this.pointB=b;

        World.add(world,this.launcher);
    }
    display (){
        if(this.launcher.bodyA){
            var pointA=this.launcher.bodyA.position;
            var pointB=this.launcher.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
    }
        fly(){
            this.launcher.bodyA=null;
        
    }

}