/**
 * Created by Pencroff on 11-Oct-15.
 */
var app = angular.module('angular-buildup', ['ngRoute','ngResource','ngCookies']);

       app.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider){
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
                })
                .when('/management/booking', {
                  templateUrl: '/static/src/management/booking/managementBookingList.html',
                  controller: 'ManagementBookingController as vm'
                });
                

                $httpProvider.interceptors.push('ResourceInterceptor');
        }])
        .run(function () {
            console.log('Angular app have runned');
        });
