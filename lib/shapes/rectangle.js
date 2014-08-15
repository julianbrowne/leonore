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

    return Rectangle;

});