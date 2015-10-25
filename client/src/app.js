/**
 * Created by Pencroff on 11-Oct-15.
 */
var app = angular.module('angular-buildup', ['ngRoute','ngResource']);

       app.config(['$routeProvider',function($routeProvider){
                $routeProvider.when('/',{
                  templateUrl:'/static/src/room/roomList.html',
                  controller:'RoomController as room'
                })
                .when('/auth', {
                  templateUrl: '/static/src/auth/login.html',
                  controller: 'AuthController as vm'
                })
                .when('/management/room',{
                  templateUrl: '/static/src/management/room/managementRoomList.html',
                  controller: 'ManagementRoomController as vm'
                });
        }])
        .run(function () {
            console.log('Angular app have runned');
        });
