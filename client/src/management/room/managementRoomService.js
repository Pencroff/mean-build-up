
var resource;

ManagementRoomService.$inject = ['$resource'];

function ManagementRoomService($resource) {
  if (!resource) {
    resource = $resource('/protected/room/:id',{id: '@id'},
    {
      'get': {method: 'GET', headers: {'x-access-token': ''}},
      'create': {method: 'POST'},
      'update': {method: 'PUT'},
      'remove': {method: 'DELETE'},
      'query': {method: 'GET', isArray: false}

    });
  }
  return resource;
}

app.factory('ManagementRoomService', ManagementRoomService);
