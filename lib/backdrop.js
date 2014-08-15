
define(['util', 'view/svg'], function(util, SVGView) { 
	return Backdrop;
});

function Backdrop(view, parent) { 

	this.version = '1.1';

	if(!parent) { 
		this.containerName = util.guid();
		this.div = document.createElementNS("http://www.w3.org/1999/xhtml","div");
		this.div.id = this.containerName;
		document.body.appendChild(this.div);
	}
	else { 
		this.containerName = parent;
		this.div = document.getElementById(parent);
		if(!this.div) { 
			this.div = document.createElementNS("http://www.w3.org/1999/xhtml","div");
			this.div.id = this.containerName;
			document.body.appendChild(this.div);
		}
		else { 
			this.div.id = parent;
		}
	}
	
	this.view = (view.toLowerCase() === "svg") ? new SVGView({version: this.version}) : new CanvasView({version: this.version});

	this.div.appendChild(this.view.viewdef);
		
	this.center   = {};
	this.center.x = Math.round(this.div.offsetWidth/2);
	this.center.y = Math.round(this.div.offsetHeight/2);

	this.max      = {};
	this.max.x    = this.div.offsetWidth;
	this.max.y    = this.div.offsetHeight;

	this.shapes  = new Array();
}

Backdrop.prototype.addShape = function(shape) { 
	var shapeid = this.modelShape(shape);	
	var elemref = this.render(this.shapes[shapeid]);
	return this;
};

Backdrop.prototype.modelShape = function (shape) { 
	return this.shapes.push(shape) - 1;
}

Backdrop.prototype.render = function (shape) { 
	shape.setBounds(this);
	if(shape.x() > shape.edgeRight)  shape.x(shape.edgeRight);
	if(shape.x() < shape.edgeLeft)   shape.x(shape.edgeLeft);
	if(shape.y() > shape.edgeTop)    shape.y(shape.edgeTop);
	if(shape.y() < shape.edgeBottom) shape.y(shape.edgeBottom);
	return this.view.renderShape(shape);
}

Backdrop.prototype.randXY = function() { 
	var rx = Math.floor(Math.random()*this.max.x);
	var ry = Math.floor(Math.random()*this.max.y);
	return { x: rx, y: ry };	
}

Backdrop.prototype.modify = function (shape,defs) { 
	for(var attribute in defs)
		shape.entity.setAttribute(attribute, defs[attribute]);
}

Backdrop.prototype.clear = function() { 
	while (this.view.viewdef.firstChild)
		this.view.viewdef.removeChild(this.view.viewdef.firstChild);
	this.shapes.length = 0;
}

Backdrop.prototype.remove = function(shape) { 
	this.view.viewdef.removeChild(shape);
	//shape.parent = null;			// remove object
}

Backdrop.prototype.addFilter = function(filter) { 
	return this.view.addFilter(filter);
}

Backdrop.prototype.addGradient = function(gradient) { 
	return this.view.addGradient(gradient);
}

Backdrop.prototype.debug = function() { 
	var str = "";
	for (var item in this) str += (item + "=" + this[item] + "\n");
	return str;
}
