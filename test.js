var chai = require('chai'),
  expect = chai.expect,
  assert = chai.assert,
  should = chai.should();

var passphrase = require('./index');


var checkFn = function(inputVal) {
  return function() {
    passphrase.check(inputVal);
  }
}


module.exports = {
  'check if secure': {
    'invalid input': function() {
      expect(checkFn(false)).to.throw('Passphrase must be a string');
      expect(checkFn()).to.throw('Passphrase must be a string');
      expect(checkFn(null)).to.throw('Passphrase must be a string');
      expect(checkFn(1)).to.throw('Passphrase must be a string');
      expect(checkFn(1.2)).to.throw('Passphrase must be a string');
      expect(checkFn({})).to.throw('Passphrase must be a string');
      expect(checkFn([])).to.throw('Passphrase must be a string');
    },
    'length 16+': function() {
      expect(checkFn('')).to.throw('Passphrase must be atleast 16 characters');
      expect(checkFn('1234567890')).to.throw('Passphrase must be atleast 16 characters');
      expect(checkFn('123456789012345')).to.throw('Passphrase must be atleast 16 characters');
      expect(checkFn('1234567890123456')).to.not.throw(Error);
      expect(checkFn('12345678901234567')).to.not.throw(Error);
      expect(checkFn('12345678901234567890')).to.not.throw(Error);      
    }
  }
}
