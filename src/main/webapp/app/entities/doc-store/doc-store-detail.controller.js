(function() {
    'use strict';

    angular
        .module('oooooooooApp')
        .controller('DocStoreDetailController', DocStoreDetailController);

    DocStoreDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'DocStore'];

    function DocStoreDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, DocStore) {
        var vm = this;

        vm.docStore = entity;
        vm.previousState = previousState.name;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;

        var unsubscribe = $rootScope.$on('oooooooooApp:docStoreUpdate', function(event, result) {
            vm.docStore = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
