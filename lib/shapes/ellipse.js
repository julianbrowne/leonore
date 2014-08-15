define(['util', 'shapes/shape'], function(util, shape) { 

    function Ellipse(definition) { 
        util.extend(this, shape);
        this.addEntity('ellipse');
        if(definition) this.mold(this.entity, definition);
        this.addForce();
        this.addGravity();
        this.addPosition();
        this.addBounds();
    };

    return Ellipse;

});