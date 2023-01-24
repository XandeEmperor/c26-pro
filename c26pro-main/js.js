ball = Bodies.circle(100,200,20,ball_options);
World.add(world,ball);

con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,
    length:100,
    stiffness:0.9
});
World.add(world,con);


rectMode(CENTER);
ellipseMode(RADIUS);


function draw()
{
    background(51);
    Engine.update(engine);
}