define(['util', 'shapes/shape'], function(util, shape) { 

    function Circle(definition) { 
        util.extend(this, shape);
        this.addEntity('circle', { cx: 0, cy: 0 });
        if(definition) this.mold(this.entity, definition);
        this.addForce();
        this.addGravity();
        this.addPosition();
        this.addBounds();
    };

    Circle.prototype.radius = function(radius) { 
        if(radius) this.set('r', radius);
        return parseInt(this.get('r'));
    };

    Circle.prototype.width = function(width) { 
        return this.radius(width);
    };

    Circle.prototype.height = function(height) { 
        return this.radius(height);
    };

    return Circle;

});