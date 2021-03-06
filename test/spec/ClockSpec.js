
describe("Clock", function() { 

  var clock;

  beforeEach(function() { 
    clock = new Leonore.Clock();
  });

  it("should have Leonore class", function() { 
    expect(Leonore).toBeDefined();    
  });

  it("should have a Clock class", function() { 
    expect(Leonore.Clock).toBeDefined();    
  });

  it("timer should exist", function() { 
    expect(clock).toBeDefined();    
  });

  it("timer should set default interval", function() { 
    var c1 = new Leonore.Clock(5000);
    expect(c1.interval).toEqual(5000);    
    var c2 = new Leonore.Clock();
    expect(c2.interval).toEqual(1000);    
  });

  it("should start and stop", function() { 
    clock.start();
    expect(clock.running).toBe(true);
    clock.stop();
    expect(clock.running).toBe(false);
  });

  it("should subscribe and unsubscribe", function() { 
    var f = function() {};
    clock.subscribe('fred', f);
    expect(clock.subscribers.length).toEqual(1);
    expect(clock.subscribers[0].name).toEqual('fred');
    clock.unsubscribe('fred');
    expect(clock.subscribers.length).toEqual(0);
  });

  it("should fire subscriber function", function() { 
    var fired = false;
    var f = function() { fired = true; };
    clock.subscribe('fred', f);
    clock.tickevent();
    expect(fired).toBe(true);
  });

});