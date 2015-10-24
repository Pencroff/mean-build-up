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
            var bookings = $resource('http://localhost:8070/public/booking');
            bookings.get({}, function(bookings){
              console.log('bookings data: ', bookings.data);
            });
            var rooms = $resource('http://localhost:8070/public/room');
            rooms.get({}, function(rooms){
              console.log('rooms data: ', rooms.data);
            });
        }
    }
})();
