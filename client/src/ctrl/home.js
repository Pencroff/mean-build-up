(function() {
    'use strict';

    angular
        .module('angular-buildup')
        .controller('HomeController', Controller);

    Controller.$inject = ['$scope', 'Bookings'];

    /* @ngInject */
    function Controller($scope, Bookings) {
        var vm = this;
        vm.title = 'Controller';
        vm.state = 'loading';

        activate();

        ////////////////

        function activate() {

          // get the bookings data from the db
          Bookings.getBookings()
            .then(function(bookings){
              console.log('bookings: ', bookings);
              vm.bookings = bookings;
              vm.state = 'ready';
            });
      
        }
    }
})();
