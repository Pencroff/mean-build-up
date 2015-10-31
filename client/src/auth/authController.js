
AuthController.$inject = ['AuthService', 'AccessTokenManager', '$location'];

function AuthController(authService, accessTokenManager, $location) {
  var vm = this;

  vm.login = function () {
    authService.login(vm.user)
    .success(function(res){
      accessTokenManager.set(res.token);
      $location.path('/management/room');
    })
    .error(function(err){
      alert('err');
    });
  }
}

app.controller('AuthController', AuthController);
