
describe("Backdrop", function() { 

  beforeEach(function() { 
  });

  it("should exist", function() { 
    expect(Leonore).toBeDefined();
    expect(Leonore.Backdrop).toBeDefined();    
  });

  it("should be instantiable against existing 100x100 div", function() { 
    expect($('#output')[0]).toBeInDOM();
    var b = new Leonore.Backdrop('svg', 'output');
    expect(b instanceof Leonore.Backdrop).toBeTruthy();
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
    var b = new Leonore.Backdrop('svg', 'output2');
    expect($('#output2')[0]).toBeInDOM();
    expect(b instanceof Leonore.Backdrop).toBeTruthy();
    expect(typeof(b.center)).toEqual('object');
    expect(b.center.x).toMatch(/\d{1,}/);
    expect(b.center.y).toMatch(/\d{1,}/);
  });

  it("should find multiple random coordinates", function() { 
    var b = new Leonore.Backdrop('svg', 'output2');
    c1 = b.randXY()
    max = b.max;
    expect(c1.x).toMatch(/\d{1,}/);
    expect(c1.y).toMatch(/\d{1,}/);
    expect(c1.x >= 0).toEqual(true);
    expect(c1.y >= 0).toEqual(true);
    expect(c1.x <= max.x).toEqual(true);
    expect(c1.y <= max.y).toEqual(true);
    c2 = b.randXY()
    expect(c2.x).toMatch(/\d{1,}/);
    expect(c2.y).toMatch(/\d{1,}/);
    expect(c2.x >= 0).toEqual(true);
    expect(c2.y >= 0).toEqual(true);
    expect(c2.x <= max.x).toEqual(true);
    expect(c2.y <= max.y).toEqual(true);
  });

  it("should clean itself up", function() { 
    var b = new Leonore.Backdrop('svg', 'output2');
    b.empty();
    expect(b.shapes.length).toEqual(0);
  });

});