
var Leonore = { 
    _loaded: false,
    _globals: false,
    _subscribers: [],
    useGlobals: function()  { this._globals = true },
    isUsingGlobals: function() { return this._globals; },
    onload:  function(f) { 
        console.log("onload");
        this._loaded ? console.log("already loaded - firing") : console.log("subscribing");
        this._loaded ? f() : this._subscribers.push(f);
    },
    ready:   function()  { 
        console.log("running");
        this._loaded = true;
        this._subscribers.forEach(function(f) { f() }); 
        this._subscribers.length = 0;
    }
};

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

        if(Leonore.isUsingGlobals()) { 
            console.log("using globals");
            window.Clock = Clock;
            window.Backdrop = Backdrop;
            window.defaults = defaults;
            window.Circle = Circle;
            window.Ellipse = Ellipse;
            window.Rectangle = Rectangle;
            window.Line = Line;
            Leonore.ready();
        }
        else { 
            console.log("using namespace");
            Leonore = new function() { 
                this._leonore = Leonore;
                this.util = util;
                this.Clock = Clock;
                this.Backdrop = Backdrop;
                this.defaults = defaults;
                this.Circle = Circle;
                this.Ellipse = Ellipse;
                this.Rectangle = Rectangle;
                this.Line = Line;
            };
            Leonore._leonore.ready()
        }


    }

);