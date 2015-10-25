(function () {
    'use strict';
    var resource={
        getAllGuests:function (){
            return [{id:'1',name:'1 Guest'},{id:'2',name:'2 Guests'},{id:'3',name:'3 Guests'}];
        }
    };
        
    app.factory('RoomGuestService', [function () {
            return resource;
        }]);
})();