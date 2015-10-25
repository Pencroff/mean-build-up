ManagementRoomController.$inject = ['ManagementRoomService']

function ManagementRoomController(managementRoomService) {
  var vm = this;

  managementRoomService.query(function(data) {
    vm.rooms = data.data;
  },function (){
    alert('error!');
  });
}

app.controller('ManagementRoomController', ManagementRoomController);
