app.factory('ResourceInterceptor', ['AccessTokenManager',
  function (accessTokenManager) {
    return {
      request: function (config) {
    	  if(!!accessTokenManager.get()){
    		  config.headers['x-access-token'] = accessTokenManager.get(); 
    	  }else{
    		  console.log('no token');
    	  }
    	  
    	  return config;
      }
    };
  }]);