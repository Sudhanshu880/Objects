class Stone{
    constructor(x,y,){
        var options = {
        restitution:0.8,
        friction:0.9,
        density:12
        }
    this.x=x;
    this.y=y;
    this.body = Bodies.rectangle(this.x,this.y,60,60,options);
    this.width = 60;
    this.height = 60;
    World.add(world, this.body);
    };
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke('grey');
        fill('black');
        rect(0,0, this.width, this.height);
        pop();
    }
}