
describe("Ellipse", function() { 

  var shape;

  beforeEach(function() { 
    var l = new Leonore();
    shape = new l.Ellipse();
  });

  it("should have Leonore class", function() { 
    expect(Leonore).toBeDefined();    
  });

  it("should have an Ellipse class", function() { 
    var l = new Leonore();
    expect(l.Ellipse).toBeDefined();    
  });

  it("shape should exist", function() { 
    expect(shape).toBeDefined();    
  });

  it("should make an ellipse", function() { 
    expect(shape.type).toEqual('ellipse');
  });

});