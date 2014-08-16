
describe("Leonore", function() { 

  beforeEach(function() { 
  });

  it("should know about shapes", function() { 
    var shapes = Leonore.shapes;
    expect(shapes.length > 0).toBe(true);
  });

});