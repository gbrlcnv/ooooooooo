(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestStatusLogDetailController', RequestStatusLogDetailController);

    RequestStatusLogDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'RequestStatusLog'];

    function RequestStatusLogDetailController($scope, $rootScope, $stateParams, previousState, entity, RequestStatusLog) {
        var vm = this;

        vm.requestStatusLog = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('oooooooooApp:requestStatusLogUpdate', function(event, result) {
            vm.requestStatusLog = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
