var chai = require('chai'),
  expect = chai.expect,
  assert = chai.assert,
  should = chai.should();

var passphrase = require('./index');

module.exports = {
  'check if secure': {
    'invalid input': function() {
      expect(passphrase.isSecure(false)).to.be.false;
      expect(passphrase.isSecure()).to.be.false;
      expect(passphrase.isSecure(null)).to.be.false;
      expect(passphrase.isSecure(1)).to.be.false;
      expect(passphrase.isSecure(1.2)).to.be.false;
      expect(passphrase.isSecure({})).to.be.false;
      expect(passphrase.isSecure([])).to.be.false;
    },
    'length 16+': function() {
      expect(passphrase.isSecure('')).to.be.false;
      expect(passphrase.isSecure('1234567890')).to.be.false;
      expect(passphrase.isSecure('123456789012345')).to.be.false;
      expect(passphrase.isSecure('1234567890123456')).to.be.true;
      expect(passphrase.isSecure('12345678901234567')).to.be.true;
      expect(passphrase.isSecure('12345678901234567890')).to.be.true;      
    }
  }
}
