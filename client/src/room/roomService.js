(function () {
    'use strict';
    var resource;
    app.factory('RoomService', ['$resource', function ($resource) {

            if (!resource) {
                resource = $resource('/public/room/:id',{id: '@id'},
                        {
                            'get': {method: 'GET'},
                            'save': {method: 'POST'},
                            'query': {method: 'GET', isArray: false}
                            
                        });
            }
            return resource;
        }]);
})();