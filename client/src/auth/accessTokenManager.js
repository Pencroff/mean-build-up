(function () {
    'use strict';


    AccessTokenManager.$inject = ['$cookieStore'];
    var instance, token;

    function AccessTokenManager($cookieStore){
      if (!instance) {
        instance = {
            get: function(){ return token || $cookieStore.get('token');},
            set: function(newToken){ 
            	token = newToken;
            	$cookieStore.put('token',token);
            }
        };
      }

      return instance;
    }

    app.factory('AccessTokenManager', AccessTokenManager);
})();
