
define(function() { return Util; });

var Util = { 

    guid: function(prefix) { 
        var prefix = (prefix===undefined) ? "id" : prefix;
        var fourChars = function() { return (((1 + Math.random()) * 0x10000)|0).toString(16).substring(1).toUpperCase(); };
        return (prefix + fourChars() + fourChars() + "-" + fourChars() + "-" + fourChars() + "-" + fourChars() + "-" + fourChars() + fourChars() + fourChars());
    },

    extend: function(destination, source) { 
        for (var k in source) { 
            if (source.hasOwnProperty(k)) destination[k] = source[k];
        }
        return destination; 
    },

    randomColor: function() { 
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);
        return "rgb(" + r + "," + g + "," + b + ")";
    }

};