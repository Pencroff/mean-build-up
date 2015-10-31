
AuthController.$inject = ['AuthService', 'AccessTokenManager'];

function AuthController(authService, accessTokenManager) {
  var vm = this;

  vm.login = function () {
    authService.login(vm.user)
    .success(function(res){
      accessTokenManager.set(res.token);
      alert(accessTokenManager.get());
    })
    .error(function(err){
      alert('err');
    });
  }
}

app.controller('AuthController', AuthController);
