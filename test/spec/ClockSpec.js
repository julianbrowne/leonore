
describe("Clock", function() { 

  var clock;

  beforeEach(function() { 
    var l = new Leonore();
    clock = new l.Clock();
  });

  it("should have Leonore class", function() { 
    expect(Leonore).toBeDefined();    
  });

  it("should have a Clock class", function() { 
    var l = new Leonore();
    expect(l.Clock).toBeDefined();    
  });

  it("timer should exist", function() { 
    expect(clock).toBeDefined();    
  });

  it("timer should set default interval", function() { 
    var l = new Leonore();
    var c1 = new l.Clock(5000);
    expect(c1.interval).toEqual(5000);    
    var c2 = new l.Clock();
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