
var Leonore = {};

requirejs.config({ 
    baseUrl: '/lib/'
});

requirejs([ 
    'util',
    'clock',
    'backdrop',
    'shapes/circle',
    'shapes/ellipse',
    'shapes/rectangle',
    'lines/line',
    'defaults'],

    function(util, Clock, Backdrop, Circle, Ellipse, Rectangle, Line, defaults) { 

        console.log("leonore loader loaded");

        if(Leonore.onload) { 
            window.util = util;
            window.Clock = Clock;
            window.Backdrop = Backdrop;
            window.defaults = defaults;
            window.Circle = Circle;
            window.Ellipse = Ellipse;
            window.Rectangle = Rectangle;
            window.Line = Line;
            Leonore.onload();
        }
        else { 
            Leonore = function() { 
                this.util = util;
                this.Clock = Clock;
                this.Backdrop = Backdrop;
                this.defaults = defaults;
                this.Circle = Circle;
                this.Ellipse = Ellipse;
                this.Rectangle = Rectangle;
                this.Line = Line;
            };
        }

    }

);