
var canvas;
var clock;

window.onload=function() { 

    canvas = new Backdrop('svg', 'animarea', { 'version':'1.1' });

    addFilters(canvas);

    clock = new Clock(700);

};