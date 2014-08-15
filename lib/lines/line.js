/**
 * Line, Polyline, Polygon
**/

define(['util'], function(util) { 
	return Line;
});

function Line(defs) { 
	this.namespace = "http://www.w3.org/2000/svg";
	this.type = "line";
	this.entity = document.createElementNS(this.namespace, "line");
	if(defs) this.mold(defs);
	this.entity.parent = this;

	this.points = new Array();
	this.setPoints(defs);

	this.vforce  = 0 + Math.round(Math.random()*1);
	this.hforce  = 0 + Math.round(Math.random()*1);
	this.gravity = Math.round(Math.random()*1) * ( Math.random() > 0.5 ? -1 : 1 );
	this.lastY=this.y();
};

Line.prototype.setPoints = function(defs) { 
	if(defs === undefined || defs.points === undefined)
		points = "0 0";
	else
		points = defs.points;
	this.points = points.split(' ');
	var str = '';
	for(var p in this.points)
		str += this.points[p] + ' ';
	this.entity.setAttribute('points', str);
};

Line.prototype.x = function(value) { 
	attr = this.entity.hasAttribute('x1') ? 'x1' : 'points';
	if(value) { 
		if(attr=='x1')
			return parseInt(this.entity.setAttribute(attr,value));
		else { 
			var pt1 = this.points[0];
			var xy1 = pt1.split(',');
			this.points[0] = '' + value + "," + xy1[1] + "";
			this.sync();
		}
	}
	else { 
		if(attr=='x1')
			return parseInt(this.entity.getAttribute(attr));
		else { 
			var pt1 = this.points[0];
			var xy1 = pt1.split(',');
			return parseInt(xy1[0]);
		}
	}
};

Line.prototype.y = function(value) { 
	attr = this.entity.hasAttribute('y1') ? 'y1' : 'points';
	if(value) { 
		if(attr=='y1')
			return parseInt(this.entity.setAttribute(attr,value));
		else { 
			var pt1 = this.points[0];
			var xy1 = pt1.split(',');
			this.points[0] = '' + xy1[0] + "," + value + "";
			this.sync();
		}
	}
	else { 
		if(attr=='y1')
			return parseInt(this.entity.getAttribute(attr));
		else { 
			var pt1 = this.points[0];
			var xy1 = pt1.split(',');
			return parseInt(xy1[1]);
		}
	}
};

Line.prototype.start = function(position) { 
	if(position) { 
		this.points[0]=""+position.x+","+position.y+"";
		this.sync();
	}
	else { 
		var ps = this.points[0].split(',');
		return { 'x':ps[0],'y':ps[1] };
	}
};

Line.prototype.inspect = function() { 
	var str = "";
	for (var item in this) str += (item + "=" + this[item] + "\n");
	return str;
};

Line.prototype.setBounds = function(canvas) { 
	var radius = parseInt(this.entity.getAttribute('r'));
	this.edgeLeft   = 1;
	this.edgeRight  = parseInt(canvas.div.offsetWidth)  - 1;
	this.edgeTop    = parseInt(canvas.div.offsetHeight) - 1;
	this.edgeBottom = 1;
	this.canvas = canvas;
};

Line.prototype.set = function(attribute,value) { 
	this[attribute] = value;
	this.entity.setAttribute(attribute,value);
};

Line.prototype.slide = function(direction,distance) { 
	axis = (direction.toLowerCase()=="r"||direction.toLowerCase()=="l") ? "cx" : "cy";	
	var posNow = parseInt(this.entity.getAttribute(axis));	
	anim = new Animator();	
	anim.addSubject(new NumericalStyleSubject(this.entity, axis, posNow, (direction.toLowerCase()=="r"||direction.toLowerCase()=="u") ? posNow+distance : posNow+distance, '' ));
	anim.play();
};

Line.prototype.addHandler = function(handler,action) { 
	this.entity[handler] = action;
};

Line.prototype.applyFilter = function(filtref) { 
	var style = this.entity.getAttribute('style');
	if(style==null) style = '';
	this.entity.setAttribute('style','filter : url(#' + filtref.getAttribute("id") + ');' + style);
};

Line.prototype.applyGradient = function(gradref) { 
	var style = this.entity.getAttribute('style');
	if(style==null) style = '';
	var newStyle = 'fill : url(#' + gradref.getAttribute("id") + ');' + style;
	this.entity.setAttribute('style',newStyle);
};

Line.prototype.applyMotion = function() { 
	var x = parseInt(this.x());
	var y = parseInt(this.y());
	this.vforce = parseInt(this.vforce + this.gravity);	
	this.lastY = y;
	x = parseInt(x) + parseInt(this.hforce) + Math.round(Math.random()*2);
	y = parseInt(y) + parseInt(this.vforce) + Math.round(Math.random()*2);
	if( x > 752 + (true) * 28) { x= 752 + (true) * 28; this.hforce=parseInt(this.hforce)*-1; }
	if( y > 408 - (true) * 12) { y= 408 - (true) * 12; this.vforce=parseInt(this.vforce)*-1; }
	if(x<0){ x=0; this.hforce=this.hforce*-1; }
	if(y<0){ y=0; this.vforce=this.vforce*-1; }
	this.x(x);
	this.y(y);
};

Line.prototype.position = function(position) { 
	this.x(position.x);
	this.y(position.y);
};

Line.prototype.color = function(color) { 
	this.entity.setAttribute('stroke',color);
};

Line.prototype.append = function(Linetype,defs) { 
	var Line = document.createElementNS(this.namespace, Linetype);
	this.mouldLine(defs,Line);
	this.entity.appendChild(Line);
};

Line.prototype.mold = function(defs, entity) { 
	var mouldee = entity ? entity : this.entity;
	for(var attr in defs) mouldee.setAttribute(attr, defs[attr]);
};

Line.prototype.group = function(LinesArray) { 
	for(var i in LinesArray) {}
};
