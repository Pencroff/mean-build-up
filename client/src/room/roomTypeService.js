(function () {
    'use strict';
    var resource={
        getAllTypes:function (){
            return [{id:'economy',name:'Economy'},{id:'premium',name:'Premium'},{id:'luxury',name:'Luxury'}];
        }
    };
        
    app.factory('RoomTypeService', [function () {
            return resource;
        }]);
})();