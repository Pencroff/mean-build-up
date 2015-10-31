
AuthService.$inject = ['$http'];

function AuthService($http){

  return {
    login: function(user) {
      return $http.post('/auth/login', user);
    }
  };
}

app.factory('AuthService', AuthService);
