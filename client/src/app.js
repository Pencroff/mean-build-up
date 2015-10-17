/**
 * Created by Pencroff on 11-Oct-15.
 */
angular
    .module('angular-buildup', [])

    .run(function() {
        console.log('Angular app have runned');
    })

    .config(['$routeProvider',function() {
      $routeProvider.when('/', {
        templateUrl: 'index.html',
        controller: 'HomeController'
      })
      .otherwise({
        redirectTo: '/'
      });
    }])
