"use strict";

(function() {

  var Passphrase = {
    /** 
     * Get whether given passphrase is secure enough.
     * 
     * @param  {String}  str The input passphrase.
     * @return {Boolean} true if secure enough; false otherwise.
     */
    isSecure: function(str) {
      // from Stanford passphrase policy
      // see http://itservices.stanford.edu/service/accounts/passwords/quickguide
      return 16 <= (str || '').length;
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