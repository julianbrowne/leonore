
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

});