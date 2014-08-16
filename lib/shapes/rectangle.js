define(['util', 'shapes/shape'], function(util, shape) { 

    function Rectangle(definition) { 
        util.extend(this, shape);
        this.addEntity('rect', { width: 0, height: 0 });
        if(definition) this.mold(this.entity, definition);
        this.addForce();
        this.addGravity();
        this.addPosition();
        this.addBounds();
    };

    Rectangle.prototype.width = function(width) { 
        if(width) this.set('width', width);
        return parseInt(this.get('width'));
    };

    Rectangle.prototype.height = function(height) { 
        if(height) this.set('height', height);
        return parseInt(this.get('height'));
    };

    Rectangle.prototype.dimensions = function(dim) { 
        if(dim === undefined) return { width: this.width(), height: this.height() };
        if(!dim.height || !dim.width) return null;
        this.height(dim.height);
        this.width(dim.width);
        return { width: this.width(), height: this.height() };
    };

    return Rectangle;

});