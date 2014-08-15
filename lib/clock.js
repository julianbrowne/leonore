
define(function() { 

	return Clock;

});

function Clock(interval) { 
	this.interval = (interval || 1000);
	this.subscribers = new Array();
	this.running = false;
	this.tickevent._object = this;
}

Clock.prototype.start = function() { 
	this.timer = window.setTimeout(this.tickevent, this.interval);
	this.running = true;
};

Clock.prototype.stop = function() { 
	clearTimeout(this.timer);
	this.running = false;
};

Clock.prototype.subscribe = function(name, func) { 
	this.subscribers.push({ 'name' : name, 'func' : func });
};

Clock.prototype.unsubscribe = function(name) { 
	for(var i=0; i<this.subscribers.length; i++ ) { 
		if(this.subscribers[i].name === name) { 
			this.subscribers.splice(i, 1);
			return;
		}
	}
};

Clock.prototype.tickevent = function() { 
/**
	if(this != arguments.callee._object)
		return arguments.callee.apply(arguments.callee._object, arguments);
**/
	for(var i=0; i<this.subscribers.length; i++ ) { 
		this.subscribers[i].func();
	}
	this.start();
};
