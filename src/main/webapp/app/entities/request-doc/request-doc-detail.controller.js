(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('RequestDocDetailController', RequestDocDetailController);

    RequestDocDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'RequestDoc'];

    function RequestDocDetailController($scope, $rootScope, $stateParams, previousState, entity, RequestDoc) {
        var vm = this;

        vm.requestDoc = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('oooooooooApp:requestDocUpdate', function(event, result) {
            vm.requestDoc = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
