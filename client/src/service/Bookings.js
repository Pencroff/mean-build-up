(function() {
  'use strict';
  angular.module('models', ['ngResource'])
  .factory('Bookings', Bookings);
  Bookings.$inject = ['$q', '$resource'];
  /* @ngInject */
  function Bookings($q, $resource) {

    var api = 'http://localhost:8070/public'

    var service = {
      getBookings: getBookings,
      getBooking: getBooking,
      createBooking: createBooking
    };
    return service;

    ////////////////

    // get a list of bookings from the database
    // @return object promise
    function getBookings(){
      var deferred = $q.defer();
      var bookings = $resource(api + '/booking');
      bookings.get({}, function(bookings){
        deferred.resolve(bookings.data);
      }, function(err){
        deferred.reject(err);
      });
      return deferred.promise;
    }

    function getBooking(){
      // @TODO
    }

    function createBooking(){
      // @TODO
    }

  }
})();
