
define(function() { return defaults; });

function defaults(shape) { 
	var stroke      = 'black';
	var strokewidth = '1';
	var fill    = 'red';
	var x       = 50;
	var y       = 50;
	var radius1	= 20;
	var radius2	= 10;
	var width	= 30;
	var height	= 40;
	var startx	= 100;
	var starty	= 100;
	var endx	= 300;
	var endy	= 350;
	
	switch (shape) { 
		case "circle":
			obj = { 'cx' : x, 'cy' : y, 'r': radius1 };
			break;
		case "rect":
			obj = {  'x' : x,  'y' : y, 'width' : width, 'height': height };
			break;
		case "ellipse":
			obj = { 'cx' : 30, 'cy' : 15, 'rx' : radius1, 'ry' : radius2 };
			break;
		case "line":
			obj = { 'x1' : startx, 'y1' : starty, 'x2' : endx, 'y2' : endy };
			break;
		case "polygon":
			obj = { 'points' : '220,100 300,210 170,250' };
			break;
		case "polyline":
			obj = { 'points' : "0,0 0,20 20,20 20,40 40,40 40,60" };
			break;
		case "path":
			obj = { 'd' : "M153 334 C153 334 151 334 151 334 C151 339 153 344 156 344 C164 344 171 339 171 334 C171 322 164 314 156 314 C142 314 131 322 131 334 C131 350 142 364 156 364 C175 364 191 350 191 334 C191 311 175 294 156 294 C131 294 111 311 111 334 C111 361 131 384 156 384 C186 384 211 361 211 334 C211 300 186 274 156 274" };
			break;
		default:
			obj = null;
	}
	
	if(obj) {
		obj['fill'] = fill;
		obj['stroke'] = stroke;
		obj['stroke-width'] = strokewidth + "px";
	}
	
	return obj;

};
