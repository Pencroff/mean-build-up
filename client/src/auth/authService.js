
AuthService.$inject = ['$http'];

function AuthService($http){

  return {
    login: function(user) {
      return $http.post('/auth/login', user);
    },
    verify: function() {
        return $http.post('/auth/verify');
      }
  };
}

app.factory('AuthService', AuthService);
