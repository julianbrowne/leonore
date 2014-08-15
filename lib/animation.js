
define(['../util'], function(util) { 

    return { 

        slide: function(direction,distance) { 
            axis = (direction.toLowerCase()=="r"||direction.toLowerCase()=="l") ? "cx" : "cy";  
            var posNow = parseInt(this.entity.getAttribute(axis));  
            anim = new Animator();  
            anim.addSubject(new NumericalStyleSubject(this.entity, axis, posNow, (direction.toLowerCase()=="r"||direction.toLowerCase()=="u") ? posNow+distance : posNow+distance, '' ));
            anim.play();
        },

        motion: function() { 
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
        }

    }

});