
define(['../util'], function(util) { 

    return {

        x: function(value) { 
            attr = this.entity.hasAttribute('cx') ? 'cx' : 'x';
            return value ? parseInt(this.entity.setAttribute(attr, value)) : parseInt(this.entity.getAttribute(attr));
        },

        y: function(value) { 
            attr = this.entity.hasAttribute('cy') ? 'cy' : 'y';
            return value ? parseInt(this.entity.setAttribute(attr, value)) : parseInt(this.entity.getAttribute(attr));
        },

        color: function(color) { 
            this.set('fill', color);
        },

        set: function(attribute,value) { 
            this[attribute] = value;
            this.entity.setAttribute(attribute,value);
        },

        get: function(attribute) { 
            return this.entity.getAttribute(attribute);
        },

        position: function(position) { 
            this.x(position.x);
            this.y(position.y);
        },

        filter: function(filtref) { 
            var style = this.entity.getAttribute('style');
            if(style==null) style = '';
            this.entity.setAttribute('style','filter : url(#' + filtref.getAttribute("id") + ');' + style);
        },

        gradient: function(gradient) { 
            var style = this.entity.getAttribute('style');  
            if(style==null) style = '';
            var newStyle = 'fill : url(#' + gradient.entity.getAttribute("id") + ');' + style;
            this.entity.setAttribute('style',newStyle);
        },

        addEntity: function(type, attributes) { 
            if(type === undefined) throw("no entity type defined");
            this.namespace = "http://www.w3.org/2000/svg";
            this.type = type;
            this.entity = document.createElementNS(this.namespace, type);
            this.mold(this.entity, attributes);
            this.entity.parent = this;
        },

        mold: function(entity, attributes) { 
            for(var attr in attributes)
                entity.setAttribute(attr, attributes[attr]);
        },

        addPosition: function() { 
            this.x(0);
            this.y(0);
            this.last = {};
            this.last.x = this.x();
            this.last.y = this.y();
        },

        addForce: function() { 
            this.force = {};
            this.force.v  = 0 + Math.round(Math.random()*1);
            this.force.h  = 0 + Math.round(Math.random()*1);
        },

        addGravity: function() { 
            this.gravity = Math.round(Math.random()*1) * ( Math.random() > 0.5 ? -1 : 1 );
        },

        addBounds: function() { 
            this.setBounds = function(canvas) { 
                var radius = parseInt(this.entity.getAttribute('r'));
                this.edgeLeft   = radius + 1;
                this.edgeRight  = parseInt(canvas.div.offsetWidth)  - radius - 1;
                this.edgeTop    = parseInt(canvas.div.offsetHeight) - radius - 1;
                this.edgeBottom = radius + 1;
                this.canvas = canvas;
            };
        },

        addHandler: function(handler,action) { 
            this.entity[handler] = action;
        },

        inspect: function() { 
            var str = "";
            for (var item in this) str += (item + "=" + this[item] + "\n");
            return str;
        }

    };

});