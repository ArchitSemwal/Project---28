class Mango{
    constructor(x,y,diameter){
        var options = {
            isStaic : true,
            'restitution' : 0.5,
            'friction' : 1.0,
        }
        this.body = Bodies.circle(x,y,diameter,options);
        this.diameter = diameter;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.image, 0,0,this.diameter);
        image(this.image,0,0,this.diameter);
        pop();
    }
}