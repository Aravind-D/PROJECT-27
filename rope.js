class Rope {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            lenght: 50
        }
        this.pointB = pointB
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }
   display(){
        strokeWeight(4);
        var pointA = this.Rope.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}