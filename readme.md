# Leonore

An easy to learn SVG package. Draws shapes, animates them.

## Dependencies

Browser that supports SVG 1.1

## Installation

Copy contents of ``lib`` directory

Insert following into HTML:

    <script src="{path_to}/lib/ext/require.js"></script>
    <script src="{path_to}/lib/loader.js"></script>

(also check out contents of ``examples`` directory)

## Basic Usage

Optionally set Leonore up to populate global namespace:

    Leonore.useGlobals()

Using globals means objects can be created like this:

    circle = new Circle()

whereas if you don't want your global namespace populated with shapes etc then, by default objects are created like this:

    circle = new Leonore.Circle()

To put a shape on screen you first need a backdrop (SVG placeholder):

    var backdrop = new Backdrop('svg', 'name_of_div_to_put_svg_inside')

    var circle = new Circle();          // makes a circle object

    circle.radius(50);                  // set radius to 50px

    circle.color('blue');               // any valid HTML color code

    backdrop.addShape(circle);          // appears on screen
