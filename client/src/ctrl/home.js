(function() {
    'use strict';

    angular
        .module('angular-buildup')
        .controller('HomeController', Controller);

    Controller.$inject = ['$scope'];

    /* @ngInject */
    function Controller($scope) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
            
        }
    }
})();