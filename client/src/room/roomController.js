app.controller('RoomController', ['RoomService', function (roomService) {
         var room = this;
         
         roomService.query(function(data){
             room.rooms = data.data;
         },function (){
             alert('error!');
         });
         room.roomData = {};
         
         
    }]);