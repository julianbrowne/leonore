
describe("Circle", function() { 

  var shape;

  beforeEach(function() { 
    var l = new Leonore();
    shape = new l.Circle();
  });

  it("should have Leonore class", function() { 
    expect(Leonore).toBeDefined();    
  });

  it("should have a Circle class", function() { 
    var l = new Leonore();
    expect(l.Circle).toBeDefined();    
  });

  it("shape should exist", function() { 
    expect(shape).toBeDefined();    
  });

  it("should make a circle", function() { 
    expect(shape.type).toEqual('circle');
  });

  it("should make new circle with random forces", function() { 
    expect(shape.force.v).toMatch(/\d{1,}/);
    expect(shape.force.h).toMatch(/\d{1,}/);
  });

  it("should set circle position", function() { 
    shape.x(10);
    shape.y(20);
    expect(shape.x()).toEqual(10);
    expect(shape.y()).toEqual(20);
  });

  it("should inspect a circle object", function() { 
    var inspected = shape.inspect();
    expect(typeof(inspected)).toEqual('string');
  });

});