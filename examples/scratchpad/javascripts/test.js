
function shapeBlitz(shape) {
	var delay = 10;	
	for(var i=0; i<20; i++)
		setTimeout(shapeRand,delay+=10);
};

function clearAndReset(canvas) { 
	canvas.clear();
	addFilters(canvas);
};

function addFilters(canvas) { 
    var filter1 = new Filter();
    filter1.addTransform('feGaussianBlur',{'in':'SourceGraphic','stdDeviation':3});
    activeFilter1 = canvas.addFilter(filter1);

    var lg = new Gradient('linear',{ 'x1':'0%','y1':'0%','x2':'100%','y2':'0%' });
    lg.addStop( { 'offset':'0%',   'style':'stop-color:' + randColor() + ';stop-opacity:1' } );
    lg.addStop( { 'offset':'100%', 'style':'stop-color:' + randColor() + ';stop-opacity:1'   } );
    canvas.addGradient(lg);

    var rg = new Gradient('radial',{ 'cx' : '50%', 'cy' : '50%', 'r' : '50%', 'fx' : '50%', 'fy' : '50%' });
    rg.addStop( { 'offset':'0%',   'style':'stop-color:' + randColor() + ';stop-opacity:0' } );
    rg.addStop( { 'offset':'100%', 'style':'stop-color:' + randColor() + ';stop-opacity:1'   } );
    canvas.addGradient(rg);
};

function shapeRand() { 
	var randomPosition = canvas.randXY();
	var shapeChosen = document.settings.shape.options[document.settings.shape.selectedIndex].value;
	var shapeDefinition = shape_defaults(shapeChosen);
	var shape = new Shape(shapeChosen,shapeDefinition);
	shape.position(randomPosition);
	shape.color(randColor());
	canvas.addShape(shape);
	shape.addHandler('onclick', function() { canvas.remove(this); } );
	clock.subscribe(shape,'applyMotion');

	if(document.lenses.filter.checked)
		shape.applyFilter(activeFilter1);

	if(document.lenses.lineargradient.checked)
		shape.applyGradient(lg);

	if(document.lenses.radialgradient.checked)
		shape.applyGradient(rg);


}

function imageRand(canvas) { 
	var randomPosition = canvas.randXY();
	var img = new Image();
	img.src = "images/duke.gif";
	img.render = function(canvas){ canvas.div.appendChild(this) };
	img.render(canvas);
}
	
	
// ****************************************************************************

function compoundShape()
{
	var randomPosition = canvas.randXY();
	
	var sd1 = shape_defaults('circle');
	var sd2 = shape_defaults('circle');
	
	var s1 = new Shape('circle',sd1);
	var s2 = new Shape('circle',sd2);
	
	s1.color(randColor());
	s2.color(randColor());
	

	s1.position(randomPosition);
	s2.position(randomPosition);
	
	s2.X(s1.X() + 30);
	
	canvas.addShape(s1);
	canvas.addShape(s2);
	
	//alert("1:" + s1.X() + " + 2:" + s2.X() + "");
}

// ****************************************************************************

function lineBlitz(shape)
{
	var delay = 10; // sprinkle effect
	
	for(var i=0;i<20;i++)
		setTimeout(lineRand,delay+=10);
}

function lineRand()
{
	var randomPosition = canvas.randXY();
	
	var lineType = document.settings.line.options[document.settings.line.selectedIndex].value;
	
	var lineDefinition = shape_defaults(lineType);
	
	var line = new Line(lineType,lineDefinition);
	
	//alert(line.entity);
	
	line.position(randomPosition);
	
	line.color(randColor());
	
	canvas.addShape(line);
	
	line.addHandler('onclick', function() { canvas.remove(this); } );
	
	//alert(line.debug());
	
	clock.subscribe(line,'applyMotion');
	
	if(document.lenses.filter.checked)         line.applyFilter(activeFilter1);
	if(document.lenses.lineargradient.checked) line.applyGradient(activeGradient1);
	if(document.lenses.radialgradient.checked) line.applyGradient(rg);
}

// ****************************************************************************
// Animation slide test..

function slideTest()
{
	var defs = { 'cx' : 50, 'cy': 60, 'r': 20, 'stroke' : 'black', 'stroke-width' : 2, 'fill' : 'blue' };

	var s1 = new Shape('circle',shapeDefinition);

	canvas.addShape('circle',s1);

	sl.slide('r',100);
}

// ****************************************************
// Randomise test..

