var resource;

ManagementBookingService.$inject = ['$resource', 'AccessTokenManager']

function ManagementBookingService($resource, accessTokenManager){
  if (!resource){
    resource = $resource('/protected/booking/:id',{id: '@id'},
    {
      'get': {method: 'GET', headers: {'x-access-token': accessTokenManager.get()}},
      'create': {method: 'POST'},
      'update': {method: 'PUT'},
      'remove': {method: 'DELETE'},
      'query': {method: 'GET', headers: {'x-access-token': accessTokenManager.get()}}
    });
  }

  return resource;
}

app.factory('ManagementBookingService', ManagementBookingService);
