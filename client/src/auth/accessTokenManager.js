(function () {
    'use strict';

    var instance, token;

    function AccessTokenManager(){
      if (!!instance) {
        instance = {
            get: function(){ return token;},
            set: function(newToken){ token = newToken;}
        };
      }

      return instance;
    }

    app.factory('AccessTokenManager', AccessTokenManager);
})();
