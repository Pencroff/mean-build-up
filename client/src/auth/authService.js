
AuthService.$inject = ['$http'];

function AuthService.($http){

  return {
    login: function(user) {
      return $http.post('/login', user);
    }
  };
}

app.factory('AuthService' AuthService);
