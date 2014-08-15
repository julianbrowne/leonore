
describe("Defaults", function() { 

  var leonore;
  var defaults;

  beforeEach(function() { 
    leonore = new Leonore();
    defaults = leonore.defaults;
  });

  it("should have Leonore class", function() { 
    expect(Leonore).toBeDefined();    
  });

  it("should have a defaults function", function() { 
    expect(leonore.defaults).toBeDefined();    
  });

  it("should reject an unknown shape", function() { 
    var config = defaults('weird');
    expect(config).toBeNull();
  });

  it("should make a default circle", function() { 
    var config = defaults('circle');
    var shape = new leonore.Circle(config);
    expect(shape).toBeDefined();
    expect(shape.type).toEqual('circle');
    expect(shape.x()).toEqual(50);
    expect(shape.y()).toEqual(50);
  });

  it("should make a default rectangle", function() { 
    var config = defaults('rect');
    var shape = new leonore.Rectangle(config);
    expect(shape).toBeDefined();
    expect(shape.type).toEqual('rect');
    expect(shape.get('width')).toEqual('30');
    expect(shape.get('height')).toEqual('40');
  });

});