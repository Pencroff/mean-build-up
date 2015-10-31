(function () {
var resource;

ManagementRoomService.$inject = ['$resource'];



function ManagementRoomService($resource,accessTokenManager) {
  if (!resource) {
    resource = $resource('/protected/room/:id',{id: '@id'},
    {
      'get': {method: 'GET'},
      'create': {method: 'POST'},
      'update': {method: 'PUT'},
      'remove': {method: 'DELETE'},
      'query': {method: 'GET',isArray: false}

    });
  }
  return resource;
}

app.factory('ManagementRoomService', ManagementRoomService);

})();