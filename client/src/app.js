/**
 * Created by Pencroff on 11-Oct-15.
 */
angular
    .module('angular-buildup', ['ngRoute'])

    .run(function() {
        console.log('Angular app have runned');
    })

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'src/views/home.html',
        controller: 'HomeController as vm'
      })
      .otherwise({
        redirectTo: '/'
      });
    }]);
