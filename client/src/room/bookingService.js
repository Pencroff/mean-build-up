(function () {
    'use strict';
    var resource;
    app.factory('BookingService', ['$resource', function ($resource) {

            if (!resource) {
                resource = $resource('/public/booking/:id',{id: '@id'},
                        {
                         'save': {method: 'POST'}
                        });
            }
            return resource;
        }]);
})();