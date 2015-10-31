ManagementBookingController.$inject = ['ManagementBookingService'];

function ManagementBookingController(managementBookingService){
  var vm = this;

  managementBookingService.query(function(data){
    vm.bookings = data.data;
  },function (){
    alert('error retrieving booking!');
  });
}

app.controller('ManagementBookingController', ManagementBookingController);
