(function() {
    'use strict';

    angular
        .module('angular-buildup')
        .controller('HomeController', Controller);

    Controller.$inject = ['$scope', '$resource'];

    /* @ngInject */
    function Controller($scope, $resource) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
            var booking = $resource('http://localhost:8070/public/booking');
            booking.get({}, function(booking){
              console.log('test');
              console.log(booking.data);
            });
        }
    }
})();
