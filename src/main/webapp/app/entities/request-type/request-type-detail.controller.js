(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestTypeDetailController', RequestTypeDetailController);

    RequestTypeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'RequestType'];

    function RequestTypeDetailController($scope, $rootScope, $stateParams, previousState, entity, RequestType) {
        var vm = this;

        vm.requestType = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('oooooooooApp:requestTypeUpdate', function(event, result) {
            vm.requestType = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
