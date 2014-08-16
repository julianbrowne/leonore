
describe("Line", function() { 

  var leonore;
  var svg_settings;

  beforeEach(function() { 

  });

  it("should exist", function() { 
    expect(Leonore).toBeDefined();
    expect(Leonore.Backdrop).toBeDefined();    
    expect(Leonore.Line).toBeDefined();    
  });

  it("should make a line", function() { 
    var line = new Leonore.Line();
    expect(line).toBeDefined();
    expect(line.type).toEqual('line');
  });

});