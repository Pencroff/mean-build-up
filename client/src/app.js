/**
 * Created by Pencroff on 11-Oct-15.
 */
var app = angular.module('angular-buildup', ['ngRoute','ngResource']);

       app.config(['$routeProvider',function($routeProvider){
                $routeProvider.when('/',{
                  templateUrl:'/static/src/room/roomList.html',
                  controller:'RoomController as room'
                });
        }])
        .run(function () {
            console.log('Angular app have runned');
        });


