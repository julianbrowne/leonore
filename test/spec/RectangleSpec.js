
describe("Rectangle", function() { 

  var shape;

  beforeEach(function() { 
    shape = new Leonore.Rectangle();
  });

  it("should have Leonore class", function() { 
    expect(Leonore).toBeDefined();    
  });

  it("should have a Rectangle class", function() { 
    expect(Leonore.Rectangle).toBeDefined();    
  });

  it("shape should exist", function() { 
    expect(shape).toBeDefined();    
  });

  it("should make a rectangle", function() { 
    expect(shape.type).toEqual('rect');
  });

  it("should set correct height", function() { 
    shape.height(50);
    expect(shape.height()).toEqual(50);
  });

  it("should set correct width", function() { 
    shape.width(50);
    expect(shape.width()).toEqual(50);
  });

  it("should set correct dimensions", function() { 
    shape.dimensions({height: 12, width: 34});
    expect(shape.width()).toEqual(34);
    expect(shape.height()).toEqual(12);
  });

  it("should fetch correct dimensions", function() { 
    shape.dimensions({height: 55, width: 99});
    var dim = shape.dimensions();
    expect(Object.keys(dim).length).toEqual(2);
    expect(dim.height).toEqual(55);
    expect(dim.width).toEqual(99);
  });

});