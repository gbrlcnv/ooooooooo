(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestStatusDetailController', RequestStatusDetailController);

    RequestStatusDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'RequestStatus'];

    function RequestStatusDetailController($scope, $rootScope, $stateParams, previousState, entity, RequestStatus) {
        var vm = this;

        vm.requestStatus = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('oooooooooApp:requestStatusUpdate', function(event, result) {
            vm.requestStatus = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
