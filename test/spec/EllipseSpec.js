
describe("Ellipse", function() { 

  var shape;

  beforeEach(function() { 
    shape = new Leonore.Ellipse();
  });

  it("should have Leonore class", function() { 
    expect(Leonore).toBeDefined();    
  });

  it("should have an Ellipse class", function() { 
    expect(Leonore.Ellipse).toBeDefined();    
  });

  it("shape should exist", function() { 
    expect(shape).toBeDefined();    
  });

  it("should make an ellipse", function() { 
    expect(shape.type).toEqual('ellipse');
  });

});