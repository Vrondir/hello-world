var expect = require('chai').expect;
require('mocha-sinon');
var helloWorld = require('../index.js');

describe('hello-world', function() {
  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });
  it('should print "Hello World!"', function() {
    helloWorld();
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith('Hello World!')).to.be.true;
  });
});
