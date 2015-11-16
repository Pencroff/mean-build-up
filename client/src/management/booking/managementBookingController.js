ManagementBookingController.$inject = ['ManagementBookingService'];

function ManagementBookingController(managementBookingService){
  var vm = this;
  var i = 0;

  managementBookingService.query(function(data){
    vm.bookings = data.data;
    for(i in vm.bookings) {
      vm.bookings[i].nights = daydiff(new Date(vm.bookings[i].startDate), new Date(vm.bookings[i].endDate));
    }
  },function (){
    alert('error retrieving booking!');
  });

  function daydiff(startDate , endDate){
      return Math.round((endDate - startDate)/(1000*60*60*24));
  }

  vm.edit = function (bookingID){
    managementBookingService.get(bookingID, function (data) {
      vm.booking = data.data;
    },function (){
      alert('error retrieving booking!');
    });
  };

  vm.cancel = function (bookingID){
    managementBookingService.remove(bookingID, function () {
      alert('success!');
    },function (){
      alert('error canceling booking!');
    });
  };
}

app.controller('ManagementBookingController', ManagementBookingController);
