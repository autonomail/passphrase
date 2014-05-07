"use strict";

(function() {

  var Passphrase = {
    /** 
     * Get whether given passphrase is secure enough.
     * 
     * @param  {String}  str The input passphrase.
     * @throws Error If passphrase isn't secure enough. Error message contains 
     * explanation.
     */
    check: function(str) {
      if ('string' !== typeof(str)) {
        throw new Error('Passphrase must be a string');
      }

      /* 
      From Stanford passphrase policy

      http://itservices.stanford.edu/service/accounts/passwords/quickguide

      We keep it simple by just mandating a minimum length.
      */
     
      if (16 > str.length) {
        throw new Error('Passphrase must be atleast 16 characters');
      }
    }
  };


  // AMD
  if (typeof define !== "undefined" && define !== null ? define.amd : void 0) {
    define(function() {
      return Passphrase;
    });
  } 
  // CommonJS
  else if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    module.exports = Passphrase;
  } 
  // Browser
  else {
    if (typeof window !== "undefined" && window !== null) {
      window.Passphrase = Passphrase;
    }
  }

})();