ManagementBookingController.$inject = ['ManagementBookingService'];

function ManagementBookingController(managementBookingService){
  var vm = this;

  managementBookingService.query(function(data){
    vm.bookings = data.data;
  },function (){
    alert('error retrieving booking!');
  });

  function daydiff(startDate , endDate){
      return Math.round((endDate - startDate)/(1000*60*60*24));
  }
}

app.controller('ManagementBookingController', ManagementBookingController);
