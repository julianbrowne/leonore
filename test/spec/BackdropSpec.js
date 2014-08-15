
describe("Backdrop", function() { 

  var leonore;
  var svg_settings;

  beforeEach(function() { 
    leonore = new Leonore();
  });

  it("should exist", function() { 
    expect(leonore).toBeDefined();
    expect(leonore.Backdrop).toBeDefined();    
  });

  it("should be instantiable against existing 100x100 div", function() { 
    expect($('#output')[0]).toBeInDOM();
    var b = new leonore.Backdrop('svg', 'output');
    expect(b instanceof leonore.Backdrop).toBeTruthy();
    expect(typeof(b.center)).toEqual('object');
    expect(b.center.x).toMatch(/\d{1,}/);
    expect(b.center.y).toMatch(/\d{1,}/);
    expect(b.center.x).toEqual(50);
    expect(b.center.y).toEqual(50);
    expect(typeof(b.max)).toEqual('object');
    expect(b.max.x).toEqual(100);
    expect(b.max.y).toEqual(100);
    expect(typeof(b.shapes)).toEqual('object');
  });

  it("should be instantiable against new div", function() { 
    var b = new leonore.Backdrop('svg', 'output2');
    expect($('#output2')[0]).toBeInDOM();
    expect(b instanceof leonore.Backdrop).toBeTruthy();
    expect(typeof(b.center)).toEqual('object');
    expect(b.center.x).toMatch(/\d{1,}/);
    expect(b.center.y).toMatch(/\d{1,}/);
  });

});