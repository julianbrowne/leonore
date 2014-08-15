
define(['util'], function(util) { 
	return SVGView;
});

function SVGView(settings) { 
	this.namespace = 'http://www.w3.org/2000/svg';
	this.viewdef = document.createElementNS(this.namespace, "svg");
	this.moldView(settings);
	this.def = document.createElementNS(this.namespace, "defs");
	this.viewdef.appendChild(this.def);
}

SVGView.prototype.clear = function() { 
	while (this.def.lastChild) this.def.removeChild(this.def.lastChild);
};

SVGView.prototype.addFilter = function(filter) { 
	return this.def.appendChild(filter.entity);
};

SVGView.prototype.addGradient = function(gradient) { 
	return this.def.appendChild(gradient.entity);
};

SVGView.prototype.renderShape = function(shape) { 
	this.viewdef.appendChild(shape.entity);
};

SVGView.prototype.moldView = function(settings) { 
	for(var attribute in settings)
		this.viewdef.setAttribute(attribute, settings[attribute]);
};