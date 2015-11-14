
RoomController.$inject = ['RoomService', 'RoomTypeService', 'RoomGuestService', 'BookingService'];
function RoomController(roomService, roomTypeService, roomGuestService, bookingService) {
    var room = this;

    roomService.query(function (data) {
        room.rooms = data.data;
    }, function () {
        alert('error!');
    });

    room.types = roomTypeService.getAllTypes();
    room.guests = roomGuestService.getAllGuests();

    room.search = function () {
      roomService.query(room.filter, function (data) {
          room.rooms = data.data;
      }, function () {
          alert('error!');
      });
    };

    function daydiff(startDate , endDate){
        return Math.round((endDate - startDate)/(1000*60*60*24));
    }

    room.book = function (form, selectedRoom) {
        room.bookClicked = true
        if (form.$valid) {

            bookingService.save({
                roomID: selectedRoom.roomID,
                guests: room.filter.capacity,
                doubleBed: selectedRoom.doubleBed,
                standard: selectedRoom.standard,
                startDate: room.booking.startDate,
                endDate: room.booking.endDate,
                bookingHolderName: room.booking.holderName,
                bookingHolderEmail: room.booking.holderEmail,
                pricePerNight: selectedRoom.price,
                amount: selectedRoom.price*daydiff(room.filter.startDate, room.filter.endDate)
            });
        } else {
            alert('Fill all Fields');
        }
    }
}
app.controller('RoomController', RoomController);
