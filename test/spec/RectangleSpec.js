
describe("Rectangle", function() { 

  var shape;

  beforeEach(function() { 
    var l = new Leonore();
    shape = new l.Rectangle();
  });

  it("should have Leonore class", function() { 
    expect(Leonore).toBeDefined();    
  });

  it("should have a Rectangle class", function() { 
    var l = new Leonore();
    expect(l.Rectangle).toBeDefined();    
  });

  it("shape should exist", function() { 
    expect(shape).toBeDefined();    
  });

  it("should make a rectangle", function() { 
    expect(shape.type).toEqual('rect');
  });

});