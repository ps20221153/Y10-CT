function setup()
{
  createCanvas(500,500);

}

function draw()
{
	background(100,100,100)

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the inside color of a shape
	fill(0,255,255);

	// change the paint brush to a specific color according to RGB values
	// this color applies only to the outside color of a shape
	stroke(0,255,255);

	// modifies the thickness of the border of an object
	strokeWeight(1);


	rect(10,10,100,50);
	rect(10,100,100,50);


	fill(50,255,20);
	stroke(0,255,255);
	strokeWeight(10);

	rect(150,10,100,50);
	rect(150,100,100,50);

}
