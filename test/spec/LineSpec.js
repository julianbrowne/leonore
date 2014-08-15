
describe("Line", function() { 

  var leonore;
  var svg_settings;

  beforeEach(function() { 
    leonore = new Leonore();
  });

  it("should exist", function() { 
    expect(leonore).toBeDefined();
    expect(leonore.Backdrop).toBeDefined();    
    expect(leonore.Line).toBeDefined();    
  });

  it("should make a line", function() { 
    var line = new leonore.Line();
    expect(line).toBeDefined();
    expect(line.type).toEqual('line');
  });

});