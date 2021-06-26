class Iron{
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:3,
            density:30
        }
        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(this.x,this.y,50,20,options);
        this.width = 50;
        this.height = 20;
        World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER)
        strokeWeight(2);
        stroke('pink');
        fill('indigo');
        rect(0,0, this.width, this.height);
        pop();
    }
}